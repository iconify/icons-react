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

.s650lebpm {
  d: path("M2.5 7.5h19M4 7.5v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-11m-13.5 0c1-5.5 10-5.5 11 0");
}

.vmjzn84ep {
  d: path("m10.5 12.5l1.5-2.25l1.5 2.25m-4.75 3l-1.5 2.25h3.25m3 0h3.25l-1.5-2.25");
}
</style><g class="hntgybcog"><path class="s650lebpm"/><path class="vmjzn84ep"/></g>`,
		"fallback": "uix:plastic-recycling-bin",
	});
}

export default Component;
