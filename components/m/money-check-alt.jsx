import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8wyo1b7b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8wyo1b7b"/>`,
		"fallback": "la:money-check-alt",
	});
}

export default Component;
