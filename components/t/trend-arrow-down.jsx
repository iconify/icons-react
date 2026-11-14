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
		"content": `<style>.u0--oacrk {
  d: path("M3 5c7 0 12 8 17 13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v9x-dtmmv {
  d: path("M15 18h5v-5");
}
</style><g class="ulnmmdpxh"><path class="u0--oacrk"/><path class="v9x-dtmmv"/></g>`,
		"fallback": "uix-sharp:trend-arrow-down",
	});
}

export default Component;
