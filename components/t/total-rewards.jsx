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
		"content": `<style>.aqd-eiw9c {
  d: path("M3 10h18v10.5H3Zm0 0V8.5C3 5.75 6.5 4 12 4s9 1.75 9 4.5V10");
}

.m1gv3-b2c {
  d: path("M10.5 8.5h3v4h-3Zm-7.5 6h6m6 0h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aqd-eiw9c"/><path class="m1gv3-b2c"/></g>`,
		"fallback": "uix-sharp:total-rewards",
	});
}

export default Component;
