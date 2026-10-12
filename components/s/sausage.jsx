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
		"content": `<style>.gq5zktbyq {
  d: path("M9.61 14A12 12 0 0 1 14 9.61");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nejhvrk6q {
  d: path("M5.51 16.12A15 15 0 0 1 16.12 5.51a3 3 0 0 1 1.55 5.8a9 9 0 0 0-6.36 6.36a3 3 0 0 1-5.8-1.55");
}
</style><g class="hntgybcog"><path class="nejhvrk6q"/><path class="gq5zktbyq"/></g>`,
		"fallback": "iconoven:sausage",
	});
}

export default Component;
