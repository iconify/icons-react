import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qk33aoacr.css';
import '../../css/h/h_q1rcciu.css';
import '../../css/a/aw_499bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qk33aoacr"/><path class="h_q1rcciu"/><path class="aw_499bet"/></g>`,
		"fallback": "solar:square-double-alt-arrow-up-bold-duotone",
	});
}

export default Component;
