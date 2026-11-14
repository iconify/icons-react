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
		"content": `<style>.we-tj0ewo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 13h10v8H7Zm-4.5 8h19M12 10V3M9 6l3-3l3 3");
}
</style><path class="we-tj0ewo"/>`,
		"fallback": "uix-sharp:normal-force",
	});
}

export default Component;
