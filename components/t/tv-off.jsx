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
		"content": `<style>.a3i3mrhlf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.1 20H2.5V6.5h.1m7.8 0h11.1v11.1M8 2.5l4 4l4-4m-12.5 1l17 17");
}
</style><path class="a3i3mrhlf"/>`,
		"fallback": "uix-sharp:tv-off",
	});
}

export default Component;
