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
		"content": `<style>.f8jpv1nbu {
  d: path("M9 18v-1.5c-3-1.5-4.5-4-4.5-7a7.5 7.5 0 0 1 15 0c0 3-1.5 5.5-4.5 7V18Zm.5 3h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vlsny18-x {
  d: path("M13 5.5a4.25 4.25 0 1 0 3 7a3.5 3.5 0 0 1-3-7");
}
</style><g class="hntgybcog"><path class="f8jpv1nbu"/><path class="vlsny18-x"/></g>`,
		"fallback": "uix:night-light",
	});
}

export default Component;
