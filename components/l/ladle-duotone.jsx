import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p39bv4_1q.css';
import '../../css/n/n_x7545vy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p39bv4_1q"/><path class="n_x7545vy"/></g>`,
		"fallback": "reicon:ladle-duotone",
	});
}

export default Component;
