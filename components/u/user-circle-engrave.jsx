import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f4abdvb7l.css';
import '../../css/i/i980sbb1t.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/y/yd398tbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f4abdvb7l"/><path class="i980sbb1t wm-shadow"/><path class="yw4fz_b6b"/><path class="yd398tbty"/></g>`,
		"fallback": "withicons:user-circle-engrave",
	});
}

export default Component;
