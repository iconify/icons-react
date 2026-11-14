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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.upw4t1b7o {
  d: path("M10.5 21.5v-7a1.5 1.5 0 0 1 3 0v7m-6.5-6h3.5m3 0H17m-9.5-6H10m4 0h2.5");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="upw4t1b7o"/></g>`,
		"fallback": "uix:library-quiet-sign",
	});
}

export default Component;
