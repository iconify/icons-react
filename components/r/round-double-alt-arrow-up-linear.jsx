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

.j_9f9bbyb {
  stroke-linejoin: round;
  d: path("M9 15.5L12 12.5L15 15.5");
}

.rh3f4sbkf {
  stroke-linejoin: round;
  d: path("M9 11.5L12 8.5L15 11.5");
}

.shu3xdl9q {
  cx: 12px;
  cy: 12px;
  r: 10px;
}
</style><g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="j_9f9bbyb"/><path class="rh3f4sbkf"/></g>`,
		"fallback": "solar:round-double-alt-arrow-up-linear",
	});
}

export default Component;
