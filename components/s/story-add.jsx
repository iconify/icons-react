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
		"content": `<style>.kwd0nmdzv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h13a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1ZM12 8v8m-4-4h8");
}
</style><path class="kwd0nmdzv"/>`,
		"fallback": "uix-sharp:story-add",
	});
}

export default Component;
