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

.s11iokb2d {
  d: path("M8.25 14.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0M11 10.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}

.v20idkbkv {
  d: path("M2.5 6h2c1 8.5 3 12 7.5 12s6.5-3.5 7.5-12h2");
}
</style><g class="hntgybcog"><path class="v20idkbkv"/><path class="s11iokb2d"/></g>`,
		"fallback": "uix:placer-mine",
	});
}

export default Component;
