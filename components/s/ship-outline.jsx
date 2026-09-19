import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owim25iry.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="owim25iry"/>`,
		"fallback": "glyphs:ship-outline",
	});
}

export default Component;
