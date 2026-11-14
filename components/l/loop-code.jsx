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
		"content": `<style>.bwk3snb_t {
  d: path("M11.5 4a8 8 0 1 0 8 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jl12g6iub {
  d: path("m17.5 14l2-2l2 2m-12-4.5L7 12l2.5 2.5m4-5L16 12l-2.5 2.5");
}
</style><g class="hntgybcog"><path class="bwk3snb_t"/><path class="jl12g6iub"/></g>`,
		"fallback": "uix:loop-code",
	});
}

export default Component;
