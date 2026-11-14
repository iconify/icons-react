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
		"content": `<style>.i4kv94b1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 4.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-7.25 14a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m14.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-6-11.75L6 16.25m7.25-9.5l4.75 9.5M7.25 18.5h9.5");
}
</style><path class="i4kv94b1o"/>`,
		"fallback": "uix:mesh-wifi",
	});
}

export default Component;
