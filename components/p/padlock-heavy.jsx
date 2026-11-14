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
		"content": `<style>.gq_dkgzjd {
  fill: currentColor;
  d: path("M10.25 15.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zt63inb1a {
  d: path("M6 10h12a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18v-4.5A3.5 3.5 0 0 1 6 10m0 0V8.5a6 6 0 0 1 12 0V10h-2.75V8.5a3.25 3.25 0 0 0-6.5 0V10Z");
}
</style><g class="hntgybcog"><path class="zt63inb1a"/><path class="gq_dkgzjd"/></g>`,
		"fallback": "uix:padlock-heavy",
	});
}

export default Component;
