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
		"content": `<style>.dcb-tsbmz {
  d: path("M5 3h7.5A2.5 2.5 0 0 1 15 5.5V10a2.5 2.5 0 0 1-2.5 2.5h-5l-3 3v-3a2.5 2.5 0 0 1-2-2.5V5.5A2.5 2.5 0 0 1 5 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oncp76bcu {
  d: path("M18 9h1a2.5 2.5 0 0 1 2.5 2.5V16a2.5 2.5 0 0 1-2.5 2.5V21l-3-2.5h-4.5A2.5 2.5 0 0 1 9 16v-.5");
}
</style><g class="hntgybcog"><path class="dcb-tsbmz"/><path class="oncp76bcu"/></g>`,
		"fallback": "uix:one-on-one",
	});
}

export default Component;
