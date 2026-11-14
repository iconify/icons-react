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
		"content": `<style>.qqyaunbvd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.894 2.669l.23-.096a1.5 1.5 0 0 1 1.958.799L14.41 8.86a1.5 1.5 0 0 1-.804 1.971l-.23.096a1.5 1.5 0 0 1-1.958-.799L9.09 4.64a1.5 1.5 0 0 1 .804-1.971M15.5 21c4-3 4-8.5.25-11M7 15.5h7.5M5 21h14");
}
</style><path class="qqyaunbvd"/>`,
		"fallback": "uix:microscope",
	});
}

export default Component;
