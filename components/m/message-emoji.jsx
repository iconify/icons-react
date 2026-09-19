import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/i/iku0m3-pn.css';
import '../../css/l/l3i9u4z1o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDRwlpcAP"><g class="wwvp95byt"><path class="iku0m3-pn"/><path class="l3i9u4z1o"/></g></mask></defs><path mask="url(#SVGDRwlpcAP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:message-emoji",
	});
}

export default Component;
