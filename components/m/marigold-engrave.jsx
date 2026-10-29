import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ejyg5ybet.css';
import '../../css/v/vxoc_pbww.css';
import '../../css/i/ij72ljbex.css';
import '../../css/e/eez02jb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ejyg5ybet wm-k"/><path class="vxoc_pbww wm-shadow"/><path class="ij72ljbex wm-k"/><path class="eez02jb3b wm-a"/></g>`,
		"fallback": "withicons:marigold-engrave",
	});
}

export default Component;
