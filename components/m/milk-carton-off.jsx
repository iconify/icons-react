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
		"content": `<style>.tndh30b4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 10.5L9 5.75h6l2.75 4.75v9A1.75 1.75 0 0 1 16 21.25H8a1.75 1.75 0 0 1-1.75-1.75ZM10 3.25h4M6.25 10.5h11.5M10 15.25h4");
}
</style><path class="tndh30b4d"/>`,
		"fallback": "iconoven:milk-carton-off",
	});
}

export default Component;
