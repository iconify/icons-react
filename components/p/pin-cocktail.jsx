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
		"content": `<style>.huh7gy9et {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.225 3.5h7.55a1.75 1.75 0 0 1 1.238 2.987l-3.776 3.776a1.75 1.75 0 0 1-2.474 0L5.987 6.487A1.75 1.75 0 0 1 7.225 3.5m3.775 8V20m-3 0h5.9M11 7h.01M19 22l-2.25-2.75a2.75 2.75 0 1 1 4.5 0Z");
}
</style><path class="huh7gy9et"/>`,
		"fallback": "uix:pin-cocktail",
	});
}

export default Component;
