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
		"content": `<style>.m30xngm0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3h7A3.5 3.5 0 0 1 18 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 4 17.5v-11A3.5 3.5 0 0 1 7.5 3M18 5.5h1.5a1 1 0 0 1 1 1V8a1 1 0 0 1-1 1H18m0 3h1.5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H18M8 3v18m3-13h4");
}
</style><path class="m30xngm0w"/>`,
		"fallback": "uix:notebook-tabs",
	});
}

export default Component;
