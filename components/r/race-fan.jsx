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
		"content": `<style>.hv0vybc4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5c0-3.75 2.5-6 5.5-6s5.5 2.25 5.5 6Zm14 0V3M4.75 8a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M16.5 3l4.25 2.25L16.5 7.5");
}
</style><path class="hv0vybc4y"/>`,
		"fallback": "uix:race-fan",
	});
}

export default Component;
