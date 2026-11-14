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
		"content": `<style>.h75jobbry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5h19m-15 0v13q2.5 1.5 5 0t5 0v-13m0 6.5h3V5.5M6.5 15h10");
}
</style><path class="h75jobbry"/>`,
		"fallback": "uix:swim-towel",
	});
}

export default Component;
