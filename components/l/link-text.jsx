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
		"content": `<style>.od4iwdb1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5h16m-9.5 6h-3a4 4 0 0 0 0 8h3m3-8h3a4 4 0 0 1 0 8h-3M9 15h6");
}
</style><path class="od4iwdb1y"/>`,
		"fallback": "uix-sharp:link-text",
	});
}

export default Component;
