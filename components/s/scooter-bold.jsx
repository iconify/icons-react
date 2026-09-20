import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzemr1byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzemr1byy"/>`,
		"fallback": "solar:scooter-bold",
	});
}

export default Component;
