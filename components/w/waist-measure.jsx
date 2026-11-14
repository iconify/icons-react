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
		"content": `<style>.p31asb9pj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 9h13l1 12.5H14L12 13l-2 8.5H4.5Zm-3-4.5h19V8h-19Zm3.5 0V6m3.5-1.5V6M13 4.5V6m3.5-1.5V6");
}
</style><path class="p31asb9pj"/>`,
		"fallback": "uix-sharp:waist-measure",
	});
}

export default Component;
