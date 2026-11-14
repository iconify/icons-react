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

.k6lzdw25c {
  d: path("M3 4.5q9 4.5 18 0v15q-9-4.5-18 0Z");
}

.r3v5o_i3l {
  d: path("m12.171 10.585l.329.165a1.398 1.398 0 0 1 0 2.5l-.329.165A1.5 1.5 0 0 1 10 12.073v-.146a1.5 1.5 0 0 1 2.171-1.342");
}
</style><g class="hntgybcog"><path class="k6lzdw25c"/><path class="r3v5o_i3l"/></g>`,
		"fallback": "uix:video-180",
	});
}

export default Component;
