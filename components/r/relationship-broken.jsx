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

.o2zst4nkl {
  d: path("M4.25 4.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M2.5 12.5c0-1.75 1.75-3 4-3s4 1.25 4 3m4.75-8.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M13.5 12.5c0-1.75 1.75-3 4-3s4 1.25 4 3m-3.5 9l-2.75-3c-1-1-1-2.75.5-3.25c1-.25 1.75.25 2.25 1c.5-.75 1.25-1.25 2.25-1c1.5.5 1.5 2.25.5 3.25Z");
}

.sa-isy3ge {
  d: path("m18 16.25l-1 2.25l1.75 1l-.75 2");
}
</style><g class="hntgybcog"><path class="o2zst4nkl"/><path class="sa-isy3ge"/></g>`,
		"fallback": "uix:relationship-broken",
	});
}

export default Component;
