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
		"content": `<style>.eso5kug0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.625 20.564Q12.28 21.5 10 21.5q-5 0-5.5-4.5C4 12 4.5 6.5 10 2.5c3.774 2.745 5.194 6.197 5.552 9.708M10 7.5V18m5.5-3h6v1.25a3 3 0 0 1-6 0Zm3 4.25v2.25m-2.25 0h4.5");
}
</style><path class="eso5kug0q"/>`,
		"fallback": "uix:surf-competition",
	});
}

export default Component;
