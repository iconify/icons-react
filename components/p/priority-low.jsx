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

.msc3utk2c {
  d: path("M11.75 10.5h.5A1.75 1.75 0 0 1 14 12.25v6.5a1.75 1.75 0 0 1-1.75 1.75h-.5A1.75 1.75 0 0 1 10 18.75v-6.5a1.75 1.75 0 0 1 1.75-1.75m7-7h.5A1.75 1.75 0 0 1 21 5.25v13.5a1.75 1.75 0 0 1-1.75 1.75h-.5A1.75 1.75 0 0 1 17 18.75V5.25a1.75 1.75 0 0 1 1.75-1.75");
}

.ou0lv_bmm {
  fill: currentColor;
  d: path("M4.75 16.5h.5A1.75 1.75 0 0 1 7 18.25v.5a1.75 1.75 0 0 1-1.75 1.75h-.5A1.75 1.75 0 0 1 3 18.75v-.5a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="ou0lv_bmm"/><path class="msc3utk2c"/></g>`,
		"fallback": "uix:priority-low",
	});
}

export default Component;
