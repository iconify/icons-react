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

.o19gn58cb {
  d: path("M8 9.75L12 12l4-2.25M12 12v4.5m-9-10V3h3.5M3 3l2.75 2.75M17.5 3H21v3.5M21 3l-2.75 2.75M3 17.5V21h3.5M3 21l2.75-2.75M21 17.5V21h-3.5m3.5 0l-2.75-2.75");
}

.s4hcrab3l {
  d: path("m12 7.5l4 2.25v4.5l-4 2.25l-4-2.25v-4.5Z");
}
</style><g class="hntgybcog"><path class="s4hcrab3l"/><path class="o19gn58cb"/></g>`,
		"fallback": "uix:scale-uniform",
	});
}

export default Component;
