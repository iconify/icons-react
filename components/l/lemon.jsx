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

.uxgtssumz {
  d: path("M18.5 5.5C18.25 4 19 3 21 2.75c.25 1.75-.75 2.75-2.5 2.75M8 15c-.75-2.5 1-5.75 3.5-7");
}

.whxl4h8wd {
  d: path("M5.5 18.5C4 17 4.5 15.5 4 14C2.5 9.5 9.5 2.5 14 4c1.5.5 3 0 4.5 1.5s1 3 1.5 4.5c1.5 4.5-5.5 11.5-10 10c-1.5-.5-3 0-4.5-1.5");
}
</style><g class="hntgybcog"><path class="whxl4h8wd"/><path class="uxgtssumz"/></g>`,
		"fallback": "iconoven:lemon",
	});
}

export default Component;
