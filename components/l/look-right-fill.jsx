import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywan-ubwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywan-ubwa"/>`,
		"fallback": "mingcute:look-right-fill",
	});
}

export default Component;
