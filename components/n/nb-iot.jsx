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
		"content": `<style>.sa-d_wbli {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 9h4a3.5 3.5 0 0 1 3.5 3.5v4A3.5 3.5 0 0 1 10 20H6a3.5 3.5 0 0 1-3.5-3.5v-4A3.5 3.5 0 0 1 6 9m2 0V3.5m7.975 8.525a3.5 3.5 0 0 1 0 4.95M18.45 9.55a7 7 0 0 1 0 9.9");
}
</style><path class="sa-d_wbli"/>`,
		"fallback": "uix:nb-iot",
	});
}

export default Component;
