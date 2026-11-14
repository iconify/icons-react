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
		"content": `<style>.b6ggcdbdf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5h9v11h-9Zm4.5 11V17m-8 0h16M6 17v4.5M18 17v4.5m-7.5-12l3-3");
}
</style><path class="b6ggcdbdf"/>`,
		"fallback": "uix-sharp:salon-mirror",
	});
}

export default Component;
