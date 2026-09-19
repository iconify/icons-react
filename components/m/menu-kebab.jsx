import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntx9yf7qj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntx9yf7qj"/>`,
		"fallback": "circum:menu-kebab",
	});
}

export default Component;
