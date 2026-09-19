import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1lvjnbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1lvjnbbh"/>`,
		"fallback": "hugeicons:swipe-right-05",
	});
}

export default Component;
