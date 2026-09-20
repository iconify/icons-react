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
		"content": `<style>.bm68p9f0y {
  d: path("M6.5 10.5v3");
}

.bwifmcccx {
  d: path("M14 7h7v10l-3.5 -3.5L14 17Z");
}

.h51gqww2n {
  d: path("M2 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="h51gqww2n"/><path class="bm68p9f0y"/><path class="bwifmcccx"/></g>`,
		"fallback": "iconmind:saved-payment-outline-thin",
	});
}

export default Component;
