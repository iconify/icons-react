import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjutf3_5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjutf3_5e"/>`,
		"fallback": "mingcute:stripe-fill",
	});
}

export default Component;
