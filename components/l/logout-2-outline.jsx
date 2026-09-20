import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5r5sgbrz.css';
import '../../css/t/t17-rogfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j5r5sgbrz"/><path class="t17-rogfh"/></g>`,
		"fallback": "solar:logout-2-outline",
	});
}

export default Component;
