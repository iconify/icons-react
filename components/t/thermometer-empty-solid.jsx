import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-u__lkge.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-u__lkge"/>`,
		"fallback": "la:thermometer-empty-solid",
	});
}

export default Component;
