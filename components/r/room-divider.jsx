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
		"content": `<style>.xi6a1m41c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21V6.5a3 3 0 0 1 6 0a3 3 0 0 1 6 0a3 3 0 0 1 6 0V21M3 18.5h18M9 6.5v12m6-12v12");
}
</style><path class="xi6a1m41c"/>`,
		"fallback": "uix:room-divider",
	});
}

export default Component;
