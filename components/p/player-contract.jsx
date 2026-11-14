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
		"content": `<style>.f5drlus7q {
  d: path("M8 15.25c1-2.75 2.5-2.75 2.5-.75c0 1.5 2-1.5 3.25-.5H16m-8 4.25h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l9bjbn4cy {
  d: path("M5 4.5a2 2 0 0 1 2-2h7.5L19 7v12.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2ZM8 7h4.5");
}
</style><g class="hntgybcog"><path class="l9bjbn4cy"/><path class="f5drlus7q"/></g>`,
		"fallback": "uix:player-contract",
	});
}

export default Component;
