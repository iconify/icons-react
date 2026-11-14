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
		"content": `<style>.bzr1dpb5e {
  d: path("M6.875 4h10.25A4.375 4.375 0 0 1 21.5 8.375v7.25A4.375 4.375 0 0 1 17.125 20H6.875A4.375 4.375 0 0 1 2.5 15.625v-7.25A4.375 4.375 0 0 1 6.875 4");
}

.g8dv8k7_h {
  d: path("M10.75 7h2.5A1.75 1.75 0 0 1 15 8.75v6.5A1.75 1.75 0 0 1 13.25 17h-2.5A1.75 1.75 0 0 1 9 15.25v-6.5A1.75 1.75 0 0 1 10.75 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bzr1dpb5e"/><path class="g8dv8k7_h"/></g>`,
		"fallback": "uix:layout-centered",
	});
}

export default Component;
