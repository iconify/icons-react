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
		"content": `<style>.nj-ef98oj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.889 5.611za2 2 0 0 1 0 2.828l-4.95 4.95a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l4.95-4.95a2 2 0 0 1 2.828 0M10 13.5l-2 2m10-10l1.75-1.75M18.5 2.5L21 5M5.5 17.5c1.25 1.25 1.75 2 1.75 2.5a1.75 1.75 0 0 1-3.5 0c0-.5.5-1.25 1.75-2.5");
}
</style><path class="nj-ef98oj"/>`,
		"fallback": "uix:micropipette",
	});
}

export default Component;
