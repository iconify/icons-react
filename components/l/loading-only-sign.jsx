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

.ii4wkmboq {
  d: path("M10.25 13h3.5a1.75 1.75 0 0 1 1.75 1.75v1.5A1.75 1.75 0 0 1 13.75 18h-3.5a1.75 1.75 0 0 1-1.75-1.75v-1.5A1.75 1.75 0 0 1 10.25 13M12 5v5M9.25 7.25L12 10l2.75-2.75");
}

.jl8jcjbbf {
  d: path("M2 12a10 10 0 1 0 20 0a10 10 0 1 0-20 0");
}
</style><g class="hntgybcog"><path class="jl8jcjbbf"/><path class="ii4wkmboq"/></g>`,
		"fallback": "uix:loading-only-sign",
	});
}

export default Component;
