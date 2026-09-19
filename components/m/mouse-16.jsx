import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lpr_75b6j.css';
import '../../css/h/hd4103b_c.css';
import '../../css/v/v83p6u1bx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lpr_75b6j"/><path class="hd4103b_c"/><path class="v83p6u1bx"/></g>`,
		"fallback": "hugeicons:mouse-16",
	});
}

export default Component;
