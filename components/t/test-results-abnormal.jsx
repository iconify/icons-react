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
		"content": `<style>.a2vftxo8q {
  d: path("M19 3.5V10m-2.25-2.25L19 10l2.25-2.25m-7-4.25v3m0 2.5h.01");
}

.hntgybcog {
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
</style><g class="hntgybcog"><path class="lomvmub0u"/><path class="jpeug_udb"/><path class="a2vftxo8q"/></g>`,
		"fallback": "uix:test-results-abnormal",
	});
}

export default Component;
