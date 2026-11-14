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
		"content": `<style>.hw_x11x-n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 18L6 10h12l2.5 8M6 10l1-2h10l1 2M2 18h20M9.5 14h5");
}
</style><path class="hw_x11x-n"/>`,
		"fallback": "uix:job-title",
	});
}

export default Component;
