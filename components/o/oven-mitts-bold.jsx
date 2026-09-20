import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ed-zjm1zz.css';
import '../../css/t/tkgb-dxqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ed-zjm1zz"/><path class="tkgb-dxqp"/></g>`,
		"fallback": "solar:oven-mitts-bold",
	});
}

export default Component;
