import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-ejmmm0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-ejmmm0b"/>`,
		"fallback": "si:up-two-headed-fill",
	});
}

export default Component;
