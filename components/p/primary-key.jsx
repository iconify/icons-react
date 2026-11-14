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
		"content": `<style>.b638ro0xu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m6 2.5L20 20m-4-4l2.5-2.5M18 18l2.5-2.5");
}
</style><path class="b638ro0xu"/>`,
		"fallback": "uix:primary-key",
	});
}

export default Component;
