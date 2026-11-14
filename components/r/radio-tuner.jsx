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
		"content": `<style>.gs49b8b5j {
  d: path("M6.875 5.5h10.25A4.375 4.375 0 0 1 21.5 9.875v4.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 14.125v-4.25A4.375 4.375 0 0 1 6.875 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.noz5z-d0o {
  d: path("M13.75 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-8.5-3.5v2m5.5-2v2M8 8.5v7");
}
</style><g class="hntgybcog"><path class="gs49b8b5j"/><path class="noz5z-d0o"/></g>`,
		"fallback": "uix:radio-tuner",
	});
}

export default Component;
