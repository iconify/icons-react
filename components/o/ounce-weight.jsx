import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cdobhebmh {
  d: path("m6.5 15l2-6h7l2 6Z");
}

.nnkp-hh0e {
  d: path("M2.5 18L6 6h12l3.5 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nnkp-hh0e"/><path class="cdobhebmh"/></g>`,
		"fallback": "uix-sharp:ounce-weight",
	});
}

export default Component;
