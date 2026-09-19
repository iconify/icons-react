import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qyltccclc.css';
import '../../css/v/v7de4ob9p.css';
import '../../css/f/fpt5t9bqn.css';
import '../../css/e/e-q_ws7_g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qyltccclc"/><path clip-rule="evenodd" class="v7de4ob9p"/><path class="fpt5t9bqn"/><path class="e-q_ws7_g"/></g>`,
		"fallback": "healthicons:market-stall",
	});
}

export default Component;
