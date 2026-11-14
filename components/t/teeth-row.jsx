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
		"content": `<style>.yl1pmtoax {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.5h17a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Zm4.25 0v9m4.25-9v9m4.25-9v9");
}
</style><path class="yl1pmtoax"/>`,
		"fallback": "uix-sharp:teeth-row",
	});
}

export default Component;
