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
		"content": `<style>.c46_ombdj {
  d: path("M7.5 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m7.75-3.25L18.5 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n-l-t2r6c {
  d: path("M10.25 10a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-.5 11.5V20c0-1.75 1-2.75 2.25-2.75s2.25 1 2.25 2.75v1.5M3 14.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M2 21.5v-.75C2 19.5 3 19 4.5 19s2.5.5 2.5 1.75v.75m11-6.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-1 6.75v-.75C17 19.5 18 19 19.5 19s2.5.5 2.5 1.75v.75");
}
</style><g class="hntgybcog"><path class="c46_ombdj"/><path class="n-l-t2r6c"/></g>`,
		"fallback": "uix:talent-search",
	});
}

export default Component;
