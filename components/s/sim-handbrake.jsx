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
		"content": `<style>.sy2826n6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5h17M6 21.5v-3a4 4 0 0 1 8 0v3m-4-7l3.5-5.25M17 3.219za1.75 1.75 0 0 1 .641 2.39l-1.75 3.032a1.75 1.75 0 0 1-2.391.64a1.75 1.75 0 0 1-.641-2.39l1.75-3.032A1.75 1.75 0 0 1 17 3.219");
}
</style><path class="sy2826n6h"/>`,
		"fallback": "uix:sim-handbrake",
	});
}

export default Component;
