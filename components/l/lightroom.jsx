import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2falvb-u.css';
import '../../css/g/gyg9rgonz.css';
import '../../css/n/n_-89i9ig.css';

const viewBox = {"width":83,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGRJNxRbwH)"><path class="j2falvb-u"/><path class="gyg9rgonz"/></g><defs><clipPath id="SVGRJNxRbwH"><path class="n_-89i9ig"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:lightroom",
	});
}

export default Component;
