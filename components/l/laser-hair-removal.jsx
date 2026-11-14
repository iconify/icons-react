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
		"content": `<style>.b1fv24kyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.121 10.343l3.536 3.536l-7.778 7.778l-3.536-3.536ZM14 10l5-5m-7.25 2.75l5-5m-.5 9.5l5-5");
}
</style><path class="b1fv24kyt"/>`,
		"fallback": "uix-sharp:laser-hair-removal",
	});
}

export default Component;
