import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ohvvv_0id.css';
import '../../css/k/kav89c6ry.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ohvvv_0id"/><path class="kav89c6ry"/></g>`,
		"fallback": "bi:vinyl-fill",
	});
}

export default Component;
