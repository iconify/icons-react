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
		"content": `<style>.choom_b0i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v7a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 13V6A3.5 3.5 0 0 1 8 2.5m4 14v5M7.25 5.25l9.5 8.5");
}
</style><path class="choom_b0i"/>`,
		"fallback": "uix:piste-intermediate",
	});
}

export default Component;
