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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jpeug_udb {
  fill: currentColor;
  d: path("M9 13h4a1.5 1.5 0 0 1 1.5 1.5V16a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 16v-1.5A1.5 1.5 0 0 1 9 13");
}

.lomvmub0u {
  d: path("M4.75 13h14.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25H4.75a2.25 2.25 0 0 1-2.25-2.25A2.25 2.25 0 0 1 4.75 13");
}

.o3z4te61y {
  d: path("M11 3.5V10M8.75 7.75L11 10l2.25-2.25m2.25-1.5l1.5 1.5l3-3");
}
</style><g class="hntgybcog"><path class="lomvmub0u"/><path class="jpeug_udb"/><path class="o3z4te61y"/></g>`,
		"fallback": "uix:test-results-normal",
	});
}

export default Component;
