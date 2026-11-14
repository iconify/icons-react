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

.ns0c7bbfw {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v4.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 12.125v-4.25A4.375 4.375 0 0 1 6.875 3.5M12 16.5v4m-4 0h8");
}

.tlx098blu {
  d: path("M8.25 9.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m4.75 2l2.5 2.25");
}
</style><g class="hntgybcog"><path class="ns0c7bbfw"/><path class="tlx098blu"/></g>`,
		"fallback": "uix:monitor-search",
	});
}

export default Component;
