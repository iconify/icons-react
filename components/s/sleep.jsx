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
		"content": `<style>.pu-7asbvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18 15A8 8 0 1 1 9 4a7.25 7.25 0 0 0 9 11Zm-.5-11.25Q17.5 6 19.75 6Q17.5 6 17.5 8.25Q17.5 6 15.25 6q2.25 0 2.25-2.25Zm3 5.75q0 1.5 1.5 1.5q-1.5 0-1.5 1.5q0-1.5-1.5-1.5q1.5 0 1.5-1.5Z");
}
</style><path class="pu-7asbvf"/>`,
		"fallback": "uix-sharp:sleep",
	});
}

export default Component;
