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
		"content": `<style>.ku8s-sjor {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 18.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m11 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-6.5-2L19 3.5m-3.25 13L5 3.5");
}
</style><path class="ku8s-sjor"/>`,
		"fallback": "uix:surgical-scissors",
	});
}

export default Component;
