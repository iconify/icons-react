import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7wcc782q.css';
import '../../css/r/ru025w_xb.css';
import '../../css/m/mkxykjb-p.css';
import '../../css/e/ea7n6qb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q7wcc782q"/><rect transform="rotate(90 21.23 14.65)" class="ru025w_xb"/><rect transform="rotate(90 21.23 2.73)" class="mkxykjb-p"/><path class="ea7n6qb6o"/></g>`,
		"fallback": "andrsrxn:panel-bottom-open-filled",
	});
}

export default Component;
