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

.lghfbwbad {
  d: path("M4 8H13");
}

.pnx-7hdbe {
  d: path("M6 13H13");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ppqxdzqbu {
  stroke-linejoin: round;
  d: path("M17 20V4L20 8");
}

.r-fwg-bgp {
  d: path("M8 18H13");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><path class="lghfbwbad"/><path class="pnx-7hdbe"/><path class="r-fwg-bgp"/><path class="ppqxdzqbu"/></g>`,
		"fallback": "solar:sort-from-bottom-to-top-line-duotone",
	});
}

export default Component;
