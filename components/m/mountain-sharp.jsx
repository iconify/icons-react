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
		"content": `<style>.as83tdm_n {
  d: path("m9.56 5.87l6.63 13.26l.56 1.12h-14l.47-1.16L8.53 5.91L9 4.75z");
}

.cc5_z8btn {
  d: path("m6.75 11.5l1.5.75l1.5-.75l1.5.75m1.5-.5L16 8l5.25 12.25H18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="as83tdm_n"/><path class="cc5_z8btn"/></g>`,
		"fallback": "iconoven:mountain-sharp",
	});
}

export default Component;
