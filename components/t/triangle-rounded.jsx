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
		"content": `<style>.rqxhj4bhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 6q1.75-3 3.5 0l6 10.75q1.75 3-1.75 3H6q-3.5 0-1.75-3Z");
}
</style><path class="rqxhj4bhj"/>`,
		"fallback": "uix:triangle-rounded",
	});
}

export default Component;
