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

.m7dyfqbmr {
  d: path("M7 21v-8h10v8M7 17h10");
}

.tu6l-so3h {
  d: path("m3.373 8.494l7.75-4.486a1.75 1.75 0 0 1 1.754 0l7.75 4.486a1.75 1.75 0 0 1 .873 1.515v9.241A1.75 1.75 0 0 1 19.75 21H4.25a1.75 1.75 0 0 1-1.75-1.75v-9.241a1.75 1.75 0 0 1 .873-1.515");
}
</style><g class="hntgybcog"><path class="tu6l-so3h"/><path class="m7dyfqbmr"/></g>`,
		"fallback": "uix:pin-warehouse",
	});
}

export default Component;
