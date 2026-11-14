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
		"content": `<style>.y3s3_7bxr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.125 2.5h3.25A2.625 2.625 0 0 1 21 5.125v.25A2.625 2.625 0 0 1 18.375 8h-3.25A2.625 2.625 0 0 1 12.5 5.375v-.25A2.625 2.625 0 0 1 15.125 2.5M16.75 8v13.5m-14.25 0h19M7 21.5V16c-.25-2.75-2-4.5-4.25-4.5C2.75 14 4.5 16 7 16c.25-3 2-5 4.5-5c0 2.75-1.75 5-4.5 5");
}
</style><path class="y3s3_7bxr"/>`,
		"fallback": "uix:plant-label-stake",
	});
}

export default Component;
