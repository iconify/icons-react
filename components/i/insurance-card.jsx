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
		"content": `<style>.e-hq_cb3c {
  d: path("M5.5 12c0-2.5 1.75-4 4-4s4 1.5 4 4Zm4 0v2.5c0 .75-.5 1.25-1.25 1.25S7 15.25 7 14.5m9-4.5h2.5M16 13.5h2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mtuecs9vi {
  d: path("M6 5h12a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 18 19H6a3.5 3.5 0 0 1-3.5-3.5v-7A3.5 3.5 0 0 1 6 5");
}
</style><g class="hntgybcog"><path class="mtuecs9vi"/><path class="e-hq_cb3c"/></g>`,
		"fallback": "uix:insurance-card",
	});
}

export default Component;
