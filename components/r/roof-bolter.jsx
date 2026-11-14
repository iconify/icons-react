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
		"content": `<style>.ghw1rwybu {
  d: path("M5.25 17.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m11 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v3uk2vb7h {
  d: path("M6.5 13.5h11a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-11a4 4 0 0 1-4-4a4 4 0 0 1 4-4m5.5 0V3M7 3h10");
}
</style><g class="hntgybcog"><path class="v3uk2vb7h"/><path class="ghw1rwybu"/></g>`,
		"fallback": "uix:roof-bolter",
	});
}

export default Component;
