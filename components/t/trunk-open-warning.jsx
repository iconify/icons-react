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
		"content": `<style>.h5ayq4b5f {
  d: path("M5 17.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rla1a1lpi {
  d: path("M2.5 15v-1.5c0-.75.5-1.25 1.5-1.25h2.75v-2l2-3.5Q9.125 6 10.25 6h4.5q1.125 0 1.5.75l2.25 3.5l1.5.5c1 .25 1.5.75 1.5 1.75V15a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 15m4.25-4.75l-4.25-4");
}
</style><g class="hntgybcog"><path class="rla1a1lpi"/><path class="h5ayq4b5f"/></g>`,
		"fallback": "uix:trunk-open-warning",
	});
}

export default Component;
