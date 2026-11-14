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
		"content": `<style>.iy3fvk86t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 21.5H4.5v-19h15v9.7M8.5 7h.01m2.74 0h4.25m-7 4h.01m2.74 0h4.25m-7 4h.01m2.74 0H13m5 0v3.25M18 21h.01");
}
</style><path class="iy3fvk86t"/>`,
		"fallback": "uix-sharp:log-alert",
	});
}

export default Component;
