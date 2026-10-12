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

.iszj8ab4j {
  d: path("M3 8.5c0-2 1.5-3.25 3.5-3.25c4 0 9.5-1.5 12.5-1.5c1.75 0 2.25 1.5 2 3c-.75 4.75-5 9.75-10.5 11.5c-1.5.5-2.5-.5-2.75-2C9 13 3 13 3 8.5");
}

.rcpixv49p {
  d: path("M13.5 4.5c-.75 3-2 5.5-4 7.5");
}
</style><g class="hntgybcog"><path class="iszj8ab4j"/><path class="rcpixv49p"/></g>`,
		"fallback": "iconoven:liver",
	});
}

export default Component;
