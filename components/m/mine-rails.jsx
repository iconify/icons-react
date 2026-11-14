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
		"content": `<style>.uvp_icc8w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.5L9 4m10 17.5L15 4M3 20h18M4.75 14h14.5M6 8.75h12M7.25 4h9.5");
}
</style><path class="uvp_icc8w"/>`,
		"fallback": "uix:mine-rails",
	});
}

export default Component;
