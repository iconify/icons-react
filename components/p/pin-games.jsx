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
		"content": `<style>.p_jcd-dez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6.5h10a4.75 4.75 0 0 1 4.5 6l-1 4.75a2.5 2.5 0 0 1-4 1.25l-2-2h-5l-2 2a2.5 2.5 0 0 1-4-1.25l-1-4.75a4.75 4.75 0 0 1 4.5-6m-1.25 5h4m-2-2v4M15.5 10h.01m2.24 2.75h.01");
}
</style><path class="p_jcd-dez"/>`,
		"fallback": "uix:pin-games",
	});
}

export default Component;
