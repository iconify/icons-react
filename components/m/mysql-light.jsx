import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/n/ni3cx4b0q.css';
import '../../css/l/l7ciq6bmm.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><g clip-path="url(#SVGvjfd0dWp)"><path clip-rule="evenodd" class="ni3cx4b0q"/></g><defs><clipPath id="SVGvjfd0dWp"><path class="l7ciq6bmm"/></clipPath></defs></g>`,
		"fallback": "skill-icons:mysql-light",
	});
}

export default Component;
