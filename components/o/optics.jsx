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
		"content": `<style>.b-77m8b5d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3a14 14 0 0 1 0 18A14 14 0 0 1 9 3M2.5 8.5h3.75m-3.75 7h3.75m5.5-7l9.25 7m-9.25 0l9.25-7");
}
</style><path class="b-77m8b5d"/>`,
		"fallback": "uix:optics",
	});
}

export default Component;
