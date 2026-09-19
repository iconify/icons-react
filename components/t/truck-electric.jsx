import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rm_q7b7hi.css';
import '../../css/y/ydu9-nbzw.css';
import '../../css/v/vm23ifb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rm_q7b7hi"/><path class="ydu9-nbzw"/><path class="vm23ifb4w"/></g>`,
		"fallback": "hugeicons:truck-electric",
	});
}

export default Component;
