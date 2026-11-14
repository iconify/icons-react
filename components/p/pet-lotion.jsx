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
		"content": `<style>.vge85xm9c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9h2a3.5 3.5 0 0 1 3.5 3.5V18A3.5 3.5 0 0 1 9 21.5H7A3.5 3.5 0 0 1 3.5 18v-5.5A3.5 3.5 0 0 1 7 9m1 0V3.5h5m5.5 6.5s3 3.5 3 5.5a3 3 0 0 1-6 0c0-2 3-5.5 3-5.5");
}
</style><path class="vge85xm9c"/>`,
		"fallback": "uix:pet-lotion",
	});
}

export default Component;
