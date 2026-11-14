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
		"content": `<style>.hz8nbsx5u {
  d: path("M2.5 11h19m-18-8l7.5 8l3 9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w8vy4_cmc {
  d: path("M15.25 17.75L14 20.5L11.5 19");
}
</style><g class="ulnmmdpxh"><path class="hz8nbsx5u"/><path class="w8vy4_cmc"/></g>`,
		"fallback": "uix-sharp:refraction-light",
	});
}

export default Component;
