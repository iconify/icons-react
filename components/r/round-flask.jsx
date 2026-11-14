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
		"content": `<style>.eo1w1_bkr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3v5.8a6.5 6.5 0 1 0 4 0V3M9 3h6M6.5 16h11");
}
</style><path class="eo1w1_bkr"/>`,
		"fallback": "uix:round-flask",
	});
}

export default Component;
