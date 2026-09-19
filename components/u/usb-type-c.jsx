import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/n/n2915hbaq.css';
import '../../css/m/my8fvdb9s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaFhASdFG"><g class="wwvp95byt"><path class="n2915hbaq"/><path class="my8fvdb9s"/></g></mask></defs><path mask="url(#SVGaFhASdFG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:usb-type-c",
	});
}

export default Component;
