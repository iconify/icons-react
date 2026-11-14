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
		"content": `<style>.x9cs5eb_g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19m-19 11.5h19M3.75 9.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m6 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m6 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M6 19.75h11.5m-2-2l2 2l-2 2");
}
</style><path class="x9cs5eb_g"/>`,
		"fallback": "uix:red-blood-cells-flow",
	});
}

export default Component;
