import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l472vy-ig.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l472vy-ig"/>`,
		"fallback": "la:mandalorian",
	});
}

export default Component;
