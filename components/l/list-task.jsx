import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/ps43wqbdq.css';
import '../../css/r/r_l-njc4f.css';
import '../../css/l/lbab3mbob.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ps43wqbdq"/><path class="r_l-njc4f"/><path class="lbab3mbob"/></g>`,
		"fallback": "bi:list-task",
	});
}

export default Component;
