import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oxc0q_bro.css';
import '../../css/o/o-3ej7bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oxc0q_bro"/><path class="o-3ej7bfc"/></g>`,
		"fallback": "solar:square-forward-bold",
	});
}

export default Component;
