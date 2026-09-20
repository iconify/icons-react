import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu8xl2y1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu8xl2y1q"/>`,
		"fallback": "mingcute:pray-line",
	});
}

export default Component;
