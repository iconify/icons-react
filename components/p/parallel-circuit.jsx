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
		"content": `<style>.vp9jelb_g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 6.5H5v11h4.25m5.5-11H19v11h-4.25M2.5 12H5m14 0h2.5M9.25 6.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m0 11a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m.75-13l4 4m0-4l-4 4m0 7l4 4m0-4l-4 4");
}
</style><path class="vp9jelb_g"/>`,
		"fallback": "uix:parallel-circuit",
	});
}

export default Component;
