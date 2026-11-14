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

.hotno8b2i {
  d: path("M7.5 10h1a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2");
}

.zu737mbca {
  d: path("M7.5 8h9a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4a4 4 0 0 1 4-4");
}
</style><g class="hntgybcog"><path class="zu737mbca"/><path class="hotno8b2i"/></g>`,
		"fallback": "uix:switch-slide",
	});
}

export default Component;
