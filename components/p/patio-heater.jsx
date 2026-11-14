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
		"content": `<style>.z_zswebse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 7l3-3.5h6L18 7Zm6 0v13.5m-3.5 0h7M8 10q-1 1.5 0 3t0 3m8-6q-1 1.5 0 3t0 3");
}
</style><path class="z_zswebse"/>`,
		"fallback": "uix:patio-heater",
	});
}

export default Component;
