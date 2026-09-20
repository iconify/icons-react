import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9q2_w4fy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9q2_w4fy"/>`,
		"fallback": "mdi:smartphone-message",
	});
}

export default Component;
