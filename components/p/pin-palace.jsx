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
		"content": `<style>.l2be6xbox {
  d: path("M3.5 21V3.5H7v3h3.25v-3h3.5v3H17v-3h3.5V21Z");
}

.nbip-qb9h {
  d: path("M9.5 21v-5.5a2.5 2.5 0 0 1 5 0V21m-8-11v3.5m11-3.5v3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l2be6xbox"/><path class="nbip-qb9h"/></g>`,
		"fallback": "uix-sharp:pin-palace",
	});
}

export default Component;
