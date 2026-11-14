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

.xo3wpk6zc {
  d: path("M9 2h6a3.5 3.5 0 0 1 3.5 3.5v13A3.5 3.5 0 0 1 15 22H9a3.5 3.5 0 0 1-3.5-3.5v-13A3.5 3.5 0 0 1 9 2M5.5 12h13");
}

.y-10poh9z {
  d: path("M9.75 7a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m0 10a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="xo3wpk6zc"/><path class="y-10poh9z"/></g>`,
		"fallback": "uix:washer-dryer",
	});
}

export default Component;
