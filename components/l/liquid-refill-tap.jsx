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
		"content": `<style>.n8wkw9_2w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.25v4.5M3 3h8.5a2 2 0 0 1 2 2v.75m-3 9.75h6V20a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5Zm3-7l1.25 1.75a1.5 1.5 0 1 1-2.5 0Zm3 8h2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2");
}
</style><path class="n8wkw9_2w"/>`,
		"fallback": "uix:liquid-refill-tap",
	});
}

export default Component;
