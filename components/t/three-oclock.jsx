import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gysu5om0q.css';
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
		"content": `<defs><path id="SVGPcl2FefH" class="gysu5om0q"/></defs><g class="kso7adcaj"><circle class="es25eccir"/><use href="#SVGPcl2FefH"/></g><g class="ij2x_72vy"><circle class="es25eccir"/><use href="#SVGPcl2FefH"/></g>`,
		"fallback": "openmoji:three-oclock",
	});
}

export default Component;
