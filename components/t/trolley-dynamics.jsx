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

.lf4whbp7l {
  d: path("M5.125 6.25h6.25A2.625 2.625 0 0 1 14 8.875v1.75a2.625 2.625 0 0 1-2.625 2.625h-6.25A2.625 2.625 0 0 1 2.5 10.625v-1.75A2.625 2.625 0 0 1 5.125 6.25");
}

.vnkza2_uo {
  d: path("M2.75 15.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-7.25 2h19m-4.75-7.5h4.75M19.25 7.5l2.25 2.25L19.25 12");
}
</style><g class="hntgybcog"><path class="lf4whbp7l"/><path class="vnkza2_uo"/></g>`,
		"fallback": "uix:trolley-dynamics",
	});
}

export default Component;
