import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/c/cdhnrnblr.css';
import '../../css/l/l7ciq6bmm.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><g clip-path="url(#SVGvjfd0dWp)"><path clip-rule="evenodd" class="cdhnrnblr"/></g><defs><clipPath id="SVGvjfd0dWp"><path class="l7ciq6bmm"/></clipPath></defs></g>`,
		"fallback": "skill-icons:mysql-dark",
	});
}

export default Component;
