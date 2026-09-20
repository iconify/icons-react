import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0f3jeb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0f3jeb1q"/>`,
		"fallback": "mingcute:rake-fill",
	});
}

export default Component;
