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
		"content": `<style>.fuu4f5r6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l9.5 9.5l-9.5 9.5L2.5 12Zm-4 8h8m-4 0v6");
}
</style><path class="fuu4f5r6v"/>`,
		"fallback": "uix-sharp:t-junction-sign",
	});
}

export default Component;
