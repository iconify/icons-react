import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f43zlbc0r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f43zlbc0r"/>`,
		"fallback": "carbon:text-line-spacing",
	});
}

export default Component;
