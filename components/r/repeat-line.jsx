import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuoxx-7fa.css';
import '../../css/q/qdqr_q1-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuoxx-7fa"/><path class="qdqr_q1-z"/>`,
		"fallback": "mingcute:repeat-line",
	});
}

export default Component;
