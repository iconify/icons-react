import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipwm09bzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipwm09bzd"/>`,
		"fallback": "noviair-light:map-heart",
	});
}

export default Component;
