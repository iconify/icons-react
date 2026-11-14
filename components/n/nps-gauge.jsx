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
		"content": `<style>.cb4_jac-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17a9.5 9.5 0 0 1 19 0M3.75 12.25L6 13.5m6-6V10m8.25 2.25L18 13.5M12 17l2.75-4.75M12 17h.01");
}
</style><path class="cb4_jac-t"/>`,
		"fallback": "uix-sharp:nps-gauge",
	});
}

export default Component;
