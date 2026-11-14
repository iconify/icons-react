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
		"content": `<style>.nk71o6bdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 8h15.5a1.75 1.75 0 0 1 1.75 1.75v4.5A1.75 1.75 0 0 1 19.75 16H4.25a1.75 1.75 0 0 1-1.75-1.75v-4.5A1.75 1.75 0 0 1 4.25 8M6 8v3.5M9.5 8v3.5M13 8v3.5M16.5 8v3.5M20 8v3.5");
}
</style><path class="nk71o6bdl"/>`,
		"fallback": "uix:metric-units",
	});
}

export default Component;
