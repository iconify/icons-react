import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aosvgyiyn.css';

const viewBox = {"width":1536,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 1664) scale(1 -1)"><path class="aosvgyiyn"/></g>`,
		"fallback": "fa:thumbs-o-down",
	});
}

export default Component;
