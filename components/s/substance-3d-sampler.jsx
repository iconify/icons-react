import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mnvsal34m.css';
import '../../css/w/w1mv9rbyg.css';
import '../../css/j/jmon4qjrz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGmAhx2dHO)"><path class="mnvsal34m"/><path class="w1mv9rbyg"/></g><defs><clipPath id="SVGmAhx2dHO"><path class="jmon4qjrz"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:substance-3d-sampler",
	});
}

export default Component;
