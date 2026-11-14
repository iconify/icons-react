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
		"content": `<style>.b8j1c_b3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18h19m-18 0v-8m2.75 8V8m11.5 10V8m2.75 10v-8M12 18v-5.5m0 2Q12 11 9 11q0 3.5 3 3.5m0-1q0-3.5 3-3.5q0 3.5-3 3.5");
}
</style><path class="b8j1c_b3p"/>`,
		"fallback": "uix:lawn-patch",
	});
}

export default Component;
