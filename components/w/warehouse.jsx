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

.k5hpe-bcn {
  d: path("M8.5 12h7a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 19.5v-6A1.5 1.5 0 0 1 8.5 12M7 15h10M7 18h10");
}

.rr5rhrirp {
  d: path("M3 21V9l9-5.5L21 9v12Z");
}
</style><g class="hntgybcog"><path class="rr5rhrirp"/><path class="k5hpe-bcn"/></g>`,
		"fallback": "uix:warehouse",
	});
}

export default Component;
