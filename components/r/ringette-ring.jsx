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
		"content": `<style>.h06wv9b3d {
  d: path("M7 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0M20.5 2.5l-8 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.otocwx4zv {
  d: path("M4 15a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}
</style><g class="hntgybcog"><path class="otocwx4zv"/><path class="h06wv9b3d"/></g>`,
		"fallback": "uix:ringette-ring",
	});
}

export default Component;
