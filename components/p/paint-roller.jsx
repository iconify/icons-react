import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vdeolzlvj.css';
import '../../css/c/ce_46szpi.css';
import '../../css/h/hu_jxvb4f.css';
import '../../css/x/xhqykhbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vdeolzlvj wm-shadow"/><path class="ce_46szpi"/><path class="hu_jxvb4f"/><path class="xhqykhbni"/></g>`,
		"fallback": "withicons-retro:paint-roller",
	});
}

export default Component;
