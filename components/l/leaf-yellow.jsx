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
		"content": `<style>.emldwzlrl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20C3 9 10 3 21 3c0 11-6 18-17 17m-1 1l9-9m-2.5-2h.01m4.99 3.5h.01");
}
</style><path class="emldwzlrl"/>`,
		"fallback": "uix:leaf-yellow",
	});
}

export default Component;
