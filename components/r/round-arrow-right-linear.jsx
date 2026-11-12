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
		"content": `<style>.bo33pnb0p {
  stroke-linejoin: round;
  d: path("M8 12H16M13 15L16 12L13 9");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.shu3xdl9q {
  cx: 12px;
  cy: 12px;
  r: 10px;
}
</style><g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="bo33pnb0p"/></g>`,
		"fallback": "solar:round-arrow-right-linear",
	});
}

export default Component;
