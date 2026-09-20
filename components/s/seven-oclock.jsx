import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2x11_bxr.css';
import '../../css/k/kso7adcaj.css';
import '../../css/e/es25eccir.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGo3sIfGZN" class="p2x11_bxr"/></defs><g class="kso7adcaj"><circle class="es25eccir"/><use href="#SVGo3sIfGZN"/></g><g class="ij2x_72vy"><circle class="es25eccir"/><use href="#SVGo3sIfGZN"/></g>`,
		"fallback": "openmoji:seven-oclock",
	});
}

export default Component;
