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
		"content": `<style>.n-y86ab3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v7M3 6h3.5m0-3h14l-2 5.5h-10Zm3 8.5l-3 9m7-9v9m4-9l3 9");
}
</style><path class="n-y86ab3x"/>`,
		"fallback": "uix-sharp:motion-light",
	});
}

export default Component;
