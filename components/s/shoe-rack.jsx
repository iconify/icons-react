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
		"content": `<style>.xhsi2sb6c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5v-19m17 19v-19M3.5 11h17m-17 9h17M7 11V6.5h2.5l2 2.25l4 .75q1 .25 1 1.5M7 20v-4.5h2.5l2 2.25l4 .75q1 .25 1 1.5");
}
</style><path class="xhsi2sb6c"/>`,
		"fallback": "uix-sharp:shoe-rack",
	});
}

export default Component;
