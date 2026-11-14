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
		"content": `<style>.d410d6b3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5c2.75 2 3.5 5.5 3.5 9V17H6v-5.5c0-3.5.75-7 3.5-9M6 12l-2.5 2.5V18L6 17m7-5l2.051 2.051M9.5 9h.01m8.99 5.5s3 2.75 3 4.25a3 3 0 0 1-6 0c0-1.5 3-4.25 3-4.25");
}
</style><path class="d410d6b3t"/>`,
		"fallback": "uix:rocket-fuel",
	});
}

export default Component;
