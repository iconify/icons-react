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
		"content": `<style>.cj-1kgozt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9c0-2.5 2-3.5 4-3.5h10c2 0 4 1 4 3.5v4c0 3.5-4 5.5-9 5.5s-9-2-9-5.5Zm5 0h.01M16 14.5h.01");
}
</style><path class="cj-1kgozt"/>`,
		"fallback": "uix:knee-slider",
	});
}

export default Component;
