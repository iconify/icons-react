import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li7j1fgry.css';
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
		"content": `<defs><path id="SVGvXdFldoL" class="li7j1fgry"/></defs><g class="kso7adcaj"><circle class="es25eccir"/><use href="#SVGvXdFldoL"/></g><g class="ij2x_72vy"><circle class="es25eccir"/><use href="#SVGvXdFldoL"/></g>`,
		"fallback": "openmoji:one-oclock",
	});
}

export default Component;
