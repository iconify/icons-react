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
		"content": `<style>.gs49b8b5j {
  d: path("M6.875 5.5h10.25A4.375 4.375 0 0 1 21.5 9.875v4.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 14.125v-4.25A4.375 4.375 0 0 1 6.875 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y8j-vabyb {
  d: path("M7.25 9zA1.75 1.75 0 0 1 9 10.75v2.5A1.75 1.75 0 0 1 7.25 15a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 7.25 9m9.5 0za1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 16.75 15A1.75 1.75 0 0 1 15 13.25v-2.5A1.75 1.75 0 0 1 16.75 9M12 10.5h.01m-.01 3h.01");
}
</style><g class="hntgybcog"><path class="gs49b8b5j"/><path class="y8j-vabyb"/></g>`,
		"fallback": "uix:shot-clock",
	});
}

export default Component;
