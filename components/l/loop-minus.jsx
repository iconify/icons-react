import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q0m1_x3ck.css';
import '../../css/a/amhu66bwq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q0m1_x3ck"/><path class="amhu66bwq"/></g>`,
		"fallback": "pepicons:loop-minus",
	});
}

export default Component;
