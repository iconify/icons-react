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
		"content": `<style>.ukh3pk4mv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11h17c0 5.5-3.75 9-8.5 9s-8.5-3.5-8.5-9m11-2.5l5-5");
}
</style><path class="ukh3pk4mv"/>`,
		"fallback": "uix:meditation-bell",
	});
}

export default Component;
