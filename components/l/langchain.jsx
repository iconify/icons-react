import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uxyucchry.css';
import '../../css/d/d8xt5fekw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGZWgQRzIM)" class="cuyn6tgcc"><path class="uxyucchry"/></g><defs><clipPath id="SVGZWgQRzIM"><path class="d8xt5fekw"/></clipPath></defs></g>`,
		"fallback": "thesvg:langchain",
	});
}

export default Component;
