import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l-geawbqe.css';
import '../../css/q/qtyt3ub6k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l-geawbqe"/><path class="qtyt3ub6k"/></g>`,
		"fallback": "bi:receipt",
	});
}

export default Component;
