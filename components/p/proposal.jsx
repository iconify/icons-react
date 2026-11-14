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
		"content": `<style>.c5vpbvb3z {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M9.25 10h.5a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 9.75 14h-.5a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 9.25 10m5 2h2.25m-9 5.5h9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="c5vpbvb3z"/></g>`,
		"fallback": "uix:proposal",
	});
}

export default Component;
