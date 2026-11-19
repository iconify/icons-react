import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7acvhbqj.css';
import '../../css/j/jp0vc9btq.css';
import '../../css/h/hmtz4ebxg.css';
import '../../css/r/rrbzk-bbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e7acvhbqj"/><path class="jp0vc9btq"/><path class="hmtz4ebxg"/><path class="rrbzk-bbh"/></g>`,
		"fallback": "andrsrxn:keyboard-floating",
	});
}

export default Component;
