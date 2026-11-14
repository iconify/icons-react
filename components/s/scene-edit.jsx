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
		"content": `<style>.s4hulzw1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h8l2.5 7h-13Zm4 7v9m-4 0h5.3m7.95-5.25l2 2l-5 5l-2.5.5l.5-2.5Z");
}
</style><path class="s4hulzw1w"/>`,
		"fallback": "uix-sharp:scene-edit",
	});
}

export default Component;
