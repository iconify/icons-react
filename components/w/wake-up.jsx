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
		"content": `<style>.c-94s4bsm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18h18M7 18a5 5 0 0 1 10 0M12 2.5V9M9.5 5L12 2.5L14.5 5M4 10.5l1.25 1.25M20 10.5l-1.25 1.25M8 21.25h8");
}
</style><path class="c-94s4bsm"/>`,
		"fallback": "uix:wake-up",
	});
}

export default Component;
