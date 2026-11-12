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
		"content": `<style>.h3eh08byi {
  stroke-linejoin: round;
  d: path("M14 17L14 7L17 10.4375");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p4tdawz1x {
  stroke-linejoin: round;
  d: path("M10 7L10 17L7 13.5625");
}

.shu3xdl9q {
  cx: 12px;
  cy: 12px;
  r: 10px;
}
</style><g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="p4tdawz1x"/><path class="h3eh08byi"/></g>`,
		"fallback": "solar:round-transfer-vertical-linear",
	});
}

export default Component;
