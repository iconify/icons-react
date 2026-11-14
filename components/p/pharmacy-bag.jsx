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
		"content": `<style>.a4kxe0bmp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3h13L20 20a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20ZM5 7.5h14");
}
</style><path class="a4kxe0bmp"/>`,
		"fallback": "uix:pharmacy-bag",
	});
}

export default Component;
