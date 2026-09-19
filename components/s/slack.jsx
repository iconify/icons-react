import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erj9alb8r.css';

const viewBox = {"width":1664,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erj9alb8r"/>`,
		"fallback": "fa:slack",
	});
}

export default Component;
