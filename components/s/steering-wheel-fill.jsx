import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd--d5ahu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd--d5ahu"/>`,
		"fallback": "mingcute:steering-wheel-fill",
	});
}

export default Component;
