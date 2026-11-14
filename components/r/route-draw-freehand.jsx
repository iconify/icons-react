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
		"content": `<style>.gwotlib4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.5 17l1-4.5L18 4l3.5 3.5L13 16Zm1-4.5L13 16M2.5 20.5c2-4 3.5 2 6-3.5");
}
</style><path class="gwotlib4b"/>`,
		"fallback": "uix-sharp:route-draw-freehand",
	});
}

export default Component;
