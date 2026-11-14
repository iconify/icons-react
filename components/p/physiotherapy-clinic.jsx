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
		"content": `<style>.skh3l8lzc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m1.5 4L11 14m0 0l5 2v5m-5-7l-5.5 6.5m6.75-10.75l5.5.5");
}
</style><path class="skh3l8lzc"/>`,
		"fallback": "uix:physiotherapy-clinic",
	});
}

export default Component;
