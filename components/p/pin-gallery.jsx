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
		"content": `<style>.ezc_z5bls {
  d: path("m6.5 18l4-4.5l4 4.5m1-6h.01");
}

.t5z_zxb8m {
  d: path("M3 8h18v13H3Zm4.5 0L12 3.5L16.5 8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t5z_zxb8m"/><path class="ezc_z5bls"/></g>`,
		"fallback": "uix-sharp:pin-gallery",
	});
}

export default Component;
