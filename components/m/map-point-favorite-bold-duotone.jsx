import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j97b_3bow.css';
import '../../css/x/x0wshub8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j97b_3bow"/><path class="x0wshub8d"/></g>`,
		"fallback": "solar:map-point-favorite-bold-duotone",
	});
}

export default Component;
