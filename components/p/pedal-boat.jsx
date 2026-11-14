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
		"content": `<style>.g-b1k20ps {
  d: path("M3 12.5h18c0 3-2 4.5-5 4.5H6.5c-2 0-3.5-2-3.5-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r_4mqfxno {
  d: path("M3 8.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4-4v8m-4-4h8m5 4L14.75 8M2.5 20h19");
}
</style><g class="hntgybcog"><path class="g-b1k20ps"/><path class="r_4mqfxno"/></g>`,
		"fallback": "uix:pedal-boat",
	});
}

export default Component;
