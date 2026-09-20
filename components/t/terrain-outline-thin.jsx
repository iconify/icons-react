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

.qaia1d1wv {
  d: path("m2 12 6 -6 3 3 5 -5 5 5");
}

.wt9iv5biz {
  d: path("m2 19 6 -6 3 3 5 -5 5 5");
}
</style><g class="hntgybcog"><path class="qaia1d1wv"/><path class="wt9iv5biz"/></g>`,
		"fallback": "iconmind:terrain-outline-thin",
	});
}

export default Component;
