import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo2crbouy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yo2crbouy"/>`,
		"fallback": "glyphs:receipt-bold",
	});
}

export default Component;
