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
		"content": `<style>.hyk3mhabr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4q3.5-1.5 7 0t7 0v16q-3.5 1.5-7 0t-7 0Zm3.5 5h7m-7 4.5h5");
}
</style><path class="hyk3mhabr"/>`,
		"fallback": "uix:parchment",
	});
}

export default Component;
