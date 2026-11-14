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

.vz5wftbeu {
  fill: currentColor;
  d: path("M7.25 3C5 3 4 4.75 4 7c0 1.25.5 2.25 1 3h14c.5-.75 1-1.75 1-3c0-2.25-1-4-3.25-4C15 3 14 4 12 4S9 3 7.25 3");
}

.wdi5_9bdl {
  d: path("M5.5 12.75L7 20c.25 1.25 1.75 1.25 2 0l1.25-4c.5-1.5 3-1.5 3.5 0L15 20c.25 1.25 1.75 1.25 2 0l1.5-7.25");
}
</style><g class="hntgybcog"><path class="vz5wftbeu"/><path class="wdi5_9bdl"/></g>`,
		"fallback": "uix:tooth-crown-part",
	});
}

export default Component;
