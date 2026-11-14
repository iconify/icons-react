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
		"content": `<style>.f2rauu0hm {
  d: path("M8.75 10a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p1plyib9e {
  d: path("M12 10a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m-2 11H6a2 2 0 1 1 2-2m-1.25-5h-2.5a2 2 0 1 1 2-2");
}
</style><g class="hntgybcog"><path class="f2rauu0hm"/><path class="p1plyib9e"/></g>`,
		"fallback": "uix:tyre-burnout",
	});
}

export default Component;
