import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kso7adcaj.css';
import '../../css/e/es25eccir.css';
import '../../css/s/sf9bepc3c.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/w/wdiib7zrl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kso7adcaj"><circle class="es25eccir"/><path class="sf9bepc3c"/></g><g class="ij2x_72vy"><circle class="es25eccir"/><path class="wdiib7zrl"/></g>`,
		"fallback": "openmoji:twelve-thirty",
	});
}

export default Component;
