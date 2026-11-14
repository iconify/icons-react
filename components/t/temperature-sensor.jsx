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
		"content": `<style>.b-b0y75-f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5L12 12m4.975-4.975za2.25 2.25 0 0 1 0 3.182l-1.768 1.768a2.25 2.25 0 0 1-3.182 0a2.25 2.25 0 0 1 0-3.182l1.768-1.768a2.25 2.25 0 0 1 3.182 0M17 7c1.5-1.5 1.5-4 4-4.5");
}
</style><path class="b-b0y75-f"/>`,
		"fallback": "uix:temperature-sensor",
	});
}

export default Component;
