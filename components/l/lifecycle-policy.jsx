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

.ibv7c-b4t {
  d: path("M17.75 6.25A8 8 0 1 1 12 4");
}

.y62_sknym {
  d: path("M10.25 2.25L12 4l-1.75 1.75M9 8.5h3.75L15 10.75v5.75H9Z");
}
</style><g class="hntgybcog"><path class="ibv7c-b4t"/><path class="y62_sknym"/></g>`,
		"fallback": "uix:lifecycle-policy",
	});
}

export default Component;
