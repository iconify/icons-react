import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0s54ac8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0s54ac8h"/>`,
		"fallback": "mdi:letter-n-circle-outline",
	});
}

export default Component;
