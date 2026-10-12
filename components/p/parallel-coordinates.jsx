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

.myvl9cblf {
  d: path("M4 4v16m8-16v16m8-16v16M4 7l8 8l8-6");
}

.ogabaqb3s {
  d: path("m4 16l8-9l8 8");
}
</style><g class="hntgybcog"><path class="myvl9cblf"/><path class="ogabaqb3s"/></g>`,
		"fallback": "iconoven:parallel-coordinates",
	});
}

export default Component;
