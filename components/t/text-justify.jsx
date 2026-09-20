import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_w9rbcxf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_w9rbcxf"/>`,
		"fallback": "quill:text-justify",
	});
}

export default Component;
