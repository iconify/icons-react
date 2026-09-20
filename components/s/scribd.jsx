import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fczfo0zmp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fczfo0zmp"/>`,
		"fallback": "la:scribd",
	});
}

export default Component;
