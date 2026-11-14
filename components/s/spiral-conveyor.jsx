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
		"content": `<style>.osi_4sbyp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7c0-2 14-2 14 0S5 9 5 11s14 2 14 4s-14 2-14 4");
}
</style><path class="osi_4sbyp"/>`,
		"fallback": "uix-sharp:spiral-conveyor",
	});
}

export default Component;
