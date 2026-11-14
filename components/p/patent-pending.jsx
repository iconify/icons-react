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
		"content": `<style>.cuno8mtsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 13.75a6.5 6.5 0 0 1-1-6.5m2.25-3a6.5 6.5 0 0 1 7.5 0m2.25 3a6.5 6.5 0 0 1-1 6.5M9.5 17.5h5m-4 3h3");
}
</style><path class="cuno8mtsu"/>`,
		"fallback": "uix:patent-pending",
	});
}

export default Component;
