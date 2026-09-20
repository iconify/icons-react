import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtdrn6hty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtdrn6hty"/>`,
		"fallback": "mdi:view-carousel-outline",
	});
}

export default Component;
