import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u9c46s4em.css';
import '../../css/d/dqrzf1bnz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u9c46s4em"/><path class="dqrzf1bnz"/></g>`,
		"fallback": "pepicons:minus-print",
	});
}

export default Component;
