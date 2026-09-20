import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5ep_7h_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5ep_7h_t"/>`,
		"fallback": "mdi:star-minus-outline",
	});
}

export default Component;
