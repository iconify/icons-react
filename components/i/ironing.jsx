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
		"content": `<style>.mi3a8ybzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5c.5-4.5 3-7.5 7-7.5H20v7.5ZM11 10V8a2 2 0 0 1 2-2h7v4M2.5 21h19");
}
</style><path class="mi3a8ybzq"/>`,
		"fallback": "uix-sharp:ironing",
	});
}

export default Component;
