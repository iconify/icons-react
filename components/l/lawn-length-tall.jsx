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
		"content": `<style>.a4hz1nbzr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5h19M6 20.5Q6 12 3.5 4M10 20.5V3m4 17.5q0-9.5 3-17m1.5 17Q19 14 21.5 9");
}
</style><path class="a4hz1nbzr"/>`,
		"fallback": "uix-sharp:lawn-length-tall",
	});
}

export default Component;
