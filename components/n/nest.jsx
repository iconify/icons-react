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
		"content": `<style>.gia10fbng {
  d: path("M2.75 12.25h18.5c0 4.75-4 9-9.25 9s-9.25-4.25-9.25-9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n0h--eokr {
  d: path("M5.25 15.25L12 17.5l6.75-2.25M7.75 19l8.5-2.75m-10.75-4V10a2.5 3 0 0 1 5 0v2.25Zm7.25 0V9a2.75 3.25 0 0 1 5.5 0v3.25Z");
}
</style><g class="hntgybcog"><path class="gia10fbng"/><path class="n0h--eokr"/></g>`,
		"fallback": "iconoven:nest",
	});
}

export default Component;
