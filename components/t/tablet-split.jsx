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
		"content": `<style>.plrfcyulo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 4.5a7.5 7.5 0 0 0 0 15Zm3 0a7.5 7.5 0 0 1 0 15Z");
}
</style><path class="plrfcyulo"/>`,
		"fallback": "iconoven:tablet-split",
	});
}

export default Component;
