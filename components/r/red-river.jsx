import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygsx_6hjo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygsx_6hjo"/>`,
		"fallback": "la:red-river",
	});
}

export default Component;
