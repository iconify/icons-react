import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvtq6p3pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvtq6p3pf"/>`,
		"fallback": "prime:paypal",
	});
}

export default Component;
