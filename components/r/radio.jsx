import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hd_q1qbrk.css';
import '../../css/h/h9rbmc90b.css';
import '../../css/g/gms57lb2v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hd_q1qbrk"/><path class="h9rbmc90b"/><path clip-rule="evenodd" class="gms57lb2v"/></g>`,
		"fallback": "pepicons:radio",
	});
}

export default Component;
