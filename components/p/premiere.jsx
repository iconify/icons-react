import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cl9ytkbyk.css';
import '../../css/s/snh30j00b.css';
import '../../css/n/n_-89i9ig.css';

const viewBox = {"width":83,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGRJNxRbwH)"><path class="cl9ytkbyk"/><path class="snh30j00b"/></g><defs><clipPath id="SVGRJNxRbwH"><path class="n_-89i9ig"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:premiere",
	});
}

export default Component;
