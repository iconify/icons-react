import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_sq7qbvh.css';
import '../../css/q/qvn4hedkj.css';

const viewBox = {"width":2084,"height":2084};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j_sq7qbvh"/><path class="qvn4hedkj"/></g>`,
		"fallback": "thesvg:vinfast",
	});
}

export default Component;
