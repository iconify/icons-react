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
		"content": `<style>.hkg8_gt-w {
  d: path("M15.5 7h5v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r-07k_b6z {
  d: path("m3 18l5-5.5l4 3L20.5 7");
}
</style><g class="hntgybcog"><path class="r-07k_b6z"/><path class="hkg8_gt-w"/></g>`,
		"fallback": "uix:trend-up",
	});
}

export default Component;
