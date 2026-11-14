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
		"content": `<style>.g8ds_eben {
  d: path("m15 2.5l-3 3l3 3m-7.5 2h3l-1.5 2m0 0c1.25 0 1.75.75 1.75 1.5c0 1-.75 1.5-1.5 1.5q-1.125 0-1.5-.75m7-4.25za1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5");
}

.ghtz8h6wm {
  d: path("M12 5.5a7.5 7.5 0 1 1-6.495 3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ghtz8h6wm"/><path class="g8ds_eben"/></g>`,
		"fallback": "uix:replay-30",
	});
}

export default Component;
