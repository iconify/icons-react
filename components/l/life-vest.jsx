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
		"content": `<style>.gd0jombny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h4l2 4l2-4h4l1 16.5H5Zm6 4v12.5M5 14h14");
}
</style><path class="gd0jombny"/>`,
		"fallback": "uix-sharp:life-vest",
	});
}

export default Component;
