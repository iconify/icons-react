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
		"content": `<style>.y7lx8n0jy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.5 14.5l5-5M11 7l1.5-1.5a3.5 3.5 0 0 1 5 5L16 12m-3 5l-1.5 1.5a3.5 3.5 0 0 1-5-5L8 12");
}
</style><path class="y7lx8n0jy"/>`,
		"fallback": "uix:tracking-link",
	});
}

export default Component;
