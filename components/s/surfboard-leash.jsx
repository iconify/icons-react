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
		"content": `<style>.a9fy-yb1n {
  d: path("M18 3q-3 9.5-11.5 14.5a2.12 2.12 0 0 1-3-3Q8.5 6 18 3M7 14l7.5-7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ug2ehz_mx {
  d: path("M4.75 18C5.5 21 8 21.25 9.5 19.5s3.25 1.75 6.25-1m0 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="a9fy-yb1n"/><path class="ug2ehz_mx"/></g>`,
		"fallback": "uix:surfboard-leash",
	});
}

export default Component;
