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
		"content": `<style>.bcbsi7k0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5h8.6M8 17V6m4.5 11v-5.5m2.25 9.75l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="bcbsi7k0m"/>`,
		"fallback": "uix:risk-loss-ratio",
	});
}

export default Component;
