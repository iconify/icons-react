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
		"content": `<style>.o1trery1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM2.5 20c0-3 1.75-5 4-5s4 2 4 5M15 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM13.5 20c0-3 1.75-5 4-5s4 2 4 5M7.179 4.255a7.5 7.5 0 0 1 3.519-1.641m2.604 0a7.5 7.5 0 0 1 3.519 1.641");
}
</style><path class="o1trery1q"/>`,
		"fallback": "uix-sharp:spatial-call",
	});
}

export default Component;
