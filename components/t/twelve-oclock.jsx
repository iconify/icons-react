import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z914-2bsx.css';
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
		"content": `<defs><path id="SVGF8X6pb6a" class="z914-2bsx"/></defs><g class="kso7adcaj"><circle class="es25eccir"/><use href="#SVGF8X6pb6a"/></g><g class="ij2x_72vy"><circle class="es25eccir"/><use href="#SVGF8X6pb6a"/></g>`,
		"fallback": "openmoji:twelve-oclock",
	});
}

export default Component;
