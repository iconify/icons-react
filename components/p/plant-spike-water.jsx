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
		"content": `<style>.so4td7z6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.952 3h6.096a1.75 1.75 0 0 1 1.655 2.319l-3.048 8.867a1.75 1.75 0 0 1-3.31 0L5.297 5.319A1.75 1.75 0 0 1 6.952 3M5.75 6.75h8.5m4.25 6.75s3 3.25 3 5a3 3 0 0 1-6 0c0-1.75 3-5 3-5");
}
</style><path class="so4td7z6v"/>`,
		"fallback": "uix:plant-spike-water",
	});
}

export default Component;
