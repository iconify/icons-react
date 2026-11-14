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
		"content": `<style>.u6r-9pbhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 14.5a4.25 4.25 0 0 1 .5-8a5 5 0 0 1 9 .75a3.75 3.75 0 0 1 1 7.25Zm6 0L10.5 18h3L11 21.5m-4-4.25l-1 3m11.5-3l-1 3");
}
</style><path class="u6r-9pbhn"/>`,
		"fallback": "uix:thunderstorm",
	});
}

export default Component;
