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
		"content": `<style>.y38vcd6kt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 8h12.5L16 20.5H3.5Zm1-4.5h8.5M16 2l1.5 1.5L16 5");
}
</style><path class="y38vcd6kt"/>`,
		"fallback": "uix-sharp:skew-horizontal",
	});
}

export default Component;
