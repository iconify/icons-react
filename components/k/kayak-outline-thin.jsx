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
		"content": `<style>.c0kdmnbne {
  d: path("M21 5h-3v6h3Z");
}

.co4ft5twa {
  d: path("M3 15c4 -2 14 -2 18 0 -4 5 -14 5 -18 0");
}

.f8gsx7b5s {
  d: path("M6 8h12");
}

.h552nsb3x {
  d: path("M3 5h3v6H3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="co4ft5twa"/><path class="f8gsx7b5s"/><path class="h552nsb3x"/><path class="c0kdmnbne"/></g>`,
		"fallback": "iconmind:kayak-outline-thin",
	});
}

export default Component;
