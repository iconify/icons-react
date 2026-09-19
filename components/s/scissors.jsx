import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oy-2x1b_m.css';
import '../../css/m/m74glxbbu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oy-2x1b_m"/><path class="m74glxbbu"/></g>`,
		"fallback": "at-icons:scissors",
	});
}

export default Component;
