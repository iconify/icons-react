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
		"content": `<style>.st7a6-bew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20.5L19.75 4.75M20 20.5L4.25 4.75m9.5 0h6v6m-9.5-6h-6v6");
}
</style><path class="st7a6-bew"/>`,
		"fallback": "uix-sharp:race-condition",
	});
}

export default Component;
