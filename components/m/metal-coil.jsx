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

.jsqwi3bmh {
  d: path("M8 11.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.l6tkhlb_v {
  d: path("M17 11.5a6 6 0 1 1-6-6");
}

.t377bvn_n {
  d: path("M2 11.5a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9 9h10.5");
}
</style><g class="hntgybcog"><path class="t377bvn_n"/><path class="l6tkhlb_v"/><path class="jsqwi3bmh"/></g>`,
		"fallback": "uix:metal-coil",
	});
}

export default Component;
