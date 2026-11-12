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
		"content": `<style>.ipq1z-bjh {
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

.vn4lpbciv {
  stroke-linejoin: round;
  d: path("M15 9L9 15M13.5 15L9 15V10.5");
}
</style><g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="vn4lpbciv"/></g>`,
		"fallback": "solar:round-arrow-left-down-linear",
	});
}

export default Component;
