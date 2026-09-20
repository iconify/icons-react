import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y04tfg5pj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y04tfg5pj"/>`,
		"fallback": "streamline:interface-content-book-content-books-book-close",
	});
}

export default Component;
