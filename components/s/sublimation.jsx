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
		"content": `<style>.fc9y8cc2n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13h14v8.5H5Zm3-2.75c-1.5-1.75 1.5-3.75 0-6m4 6c-1.5-1.75 1.5-3.75 0-6m4 6c-1.5-1.75 1.5-3.75 0-6");
}
</style><path class="fc9y8cc2n"/>`,
		"fallback": "uix-sharp:sublimation",
	});
}

export default Component;
