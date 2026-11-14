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
		"content": `<style>.uxj-_4pxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4h6v7c0 5-2.5 8-7 9.5L8.5 19c2.5-1.25 3.75-3 4-5.5H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z");
}
</style><path class="uxj-_4pxm"/>`,
		"fallback": "uix-sharp:quote-single",
	});
}

export default Component;
