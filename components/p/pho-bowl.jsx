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
		"content": `<style>.uzndk61io {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18c0 5.25-4 9-9 9s-9-3.75-9-9m10.5 0l4-8m-1 8L21 4M5 11c0-3.5 2-5.5 5-5.5c0 3-2 5.5-5 5.5");
}
</style><path class="uzndk61io"/>`,
		"fallback": "uix:pho-bowl",
	});
}

export default Component;
