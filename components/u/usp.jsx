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

.p1ykhfepk {
  d: path("m9 9l3 11.75L15 9");
}

.ru4tp72_w {
  d: path("M7 3.5h10L21.5 9L12 21L2.5 9ZM2.5 9h19");
}
</style><g class="hntgybcog"><path class="ru4tp72_w"/><path class="p1ykhfepk"/></g>`,
		"fallback": "uix:usp",
	});
}

export default Component;
