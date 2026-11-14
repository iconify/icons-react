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
		"content": `<style>.hnr85p9pe {
  d: path("M7.5 5L12 8.5L16.5 5M9 11.25l3-2.75l3 2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sq07x-bkh {
  d: path("M2 16.5a10 2.5 0 1 0 20 0a10 2.5 0 1 0-20 0m4 2v3m12-3v3m-7.5-18a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="sq07x-bkh"/><path class="hnr85p9pe"/></g>`,
		"fallback": "uix:trampoline-park",
	});
}

export default Component;
