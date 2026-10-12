import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i8ycj25bn.css';
import '../../css/z/zezopqb-y.css';
import '../../css/m/mg8w1acnv.css';
import '../../css/v/v7gggobaq.css';
import '../../css/o/o2esqvb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i8ycj25bn"/><circle class="zezopqb-y"/><circle class="mg8w1acnv"/><circle class="v7gggobaq"/><circle class="o2esqvb6x"/></g>`,
		"fallback": "andrsrxn:tic-tac-toe",
	});
}

export default Component;
