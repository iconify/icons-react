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
		"content": `<style>.y4fzxmsyg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8c2-2.5 4 2.5 6.5 0s4.5 2.5 7 0s4 0 5.5 0m-19 5c2-2.5 4 2.5 6.5 0s4.5 2.5 7 0s4 0 5.5 0m-19 5c2-2.5 4 2.5 6.5 0s4.5 2.5 7 0s4 0 5.5 0");
}
</style><path class="y4fzxmsyg"/>`,
		"fallback": "uix:traffic-flood",
	});
}

export default Component;
