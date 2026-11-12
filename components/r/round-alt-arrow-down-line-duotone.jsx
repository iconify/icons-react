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
		"content": `<style>.doy9q4b5f {
  cx: 12px;
  cy: 12px;
  r: 10px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p6sd0xq1m {
  stroke-linejoin: round;
  d: path("M15 10.5L12 13.5L9 10.5");
}
</style><g class="ipq1z-bjh"><circle class="doy9q4b5f"/><path class="p6sd0xq1m"/></g>`,
		"fallback": "solar:round-alt-arrow-down-line-duotone",
	});
}

export default Component;
