import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnx33c0jb.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnx33c0jb"/>`,
		"fallback": "lineicons:line-spacing",
	});
}

export default Component;
