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
		"content": `<style>.b7cy1bbwm {
  stroke-linejoin: round;
  d: path("M15.5 9L12.5 12L15.5 15");
}

.fa8kidbzr {
  stroke-linejoin: round;
  d: path("M11.5 9L8.5 12L11.5 15");
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
</style><g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="b7cy1bbwm"/><path class="fa8kidbzr"/></g>`,
		"fallback": "solar:round-double-alt-arrow-left-linear",
	});
}

export default Component;
