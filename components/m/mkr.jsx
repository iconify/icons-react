import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iksa7qb8o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iksa7qb8o"/>`,
		"fallback": "cryptocurrency:mkr",
	});
}

export default Component;
