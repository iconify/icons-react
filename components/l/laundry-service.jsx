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
		"content": `<style>.mxl9tbbnp {
  d: path("m12 7l8.5 3.25L19 15l-2-.75v7.25H7v-7.25L5 15l-1.5-4.75Zm0 0V5a1.5 1.5 0 1 0-1.5-1.5");
}

.q87_8eb2a {
  d: path("m9.5 8l2.5 3l2.5-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mxl9tbbnp"/><path class="q87_8eb2a"/></g>`,
		"fallback": "uix-sharp:laundry-service",
	});
}

export default Component;
