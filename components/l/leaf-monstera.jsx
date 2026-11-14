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
		"content": `<style>.sq55occpe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 18.5c-2.5 2-6.5 1-7.75-2l5-2.5L3 12.75l.25-2l6-.75L4.5 7.5C6 4.25 9 2.5 12 2.5s6 1.75 7.5 5L14.75 10l6 .75l.25 2L14.75 14l5 2.5c-1.25 3-5.25 4-7.75 2m0 3V6");
}
</style><path class="sq55occpe"/>`,
		"fallback": "uix:leaf-monstera",
	});
}

export default Component;
