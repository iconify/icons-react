import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/w/wr3xz_b7n.css';
import '../../css/l/lqg-_obgr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbHlnI1Jp"><g class="wwvp95byt"><path class="wr3xz_b7n"/><path class="lqg-_obgr"/></g></mask></defs><path mask="url(#SVGbHlnI1Jp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:vip-one",
	});
}

export default Component;
