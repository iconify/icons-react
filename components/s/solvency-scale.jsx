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
		"content": `<style>.we9wlybxp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4v16m-4 0h8M5 7h14M2.75 13L5 7l2.25 6c0 1.25-1 2-2.25 2s-2.25-.75-2.25-2m14 0L19 7l2.25 6c0 1.25-1 2-2.25 2s-2.25-.75-2.25-2");
}
</style><path class="we9wlybxp"/>`,
		"fallback": "uix:solvency-scale",
	});
}

export default Component;
