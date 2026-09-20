import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2iwa8ist.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2iwa8ist"/>`,
		"fallback": "thesvg-color:plangrid",
	});
}

export default Component;
