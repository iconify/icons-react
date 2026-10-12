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
		"content": `<style>.h-3enew_b {
  d: path("M7 21.25V7.75a5 5 0 0 1 10 0v13.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z4zds7b1n {
  d: path("M9.5 11.75v-4a2.5 2.5 0 0 1 5 0v4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1m.25 5.5h4.5");
}
</style><g class="hntgybcog"><path class="h-3enew_b"/><path class="z4zds7b1n"/></g>`,
		"fallback": "iconoven:manicure",
	});
}

export default Component;
