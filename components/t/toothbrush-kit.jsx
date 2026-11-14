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
		"content": `<style>.w_6p00b7g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21V8.5M7.5 3zA1.5 1.5 0 0 1 9 4.5V7a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 6 7V4.5A1.5 1.5 0 0 1 7.5 3m6.505 3h3.99a1.75 1.75 0 0 1 1.734 1.986l-1.023 7.5A1.75 1.75 0 0 1 16.972 17h-1.944a1.75 1.75 0 0 1-1.734-1.514l-1.023-7.5A1.75 1.75 0 0 1 14.005 6M15.5 17h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5M12 3h8");
}
</style><path class="w_6p00b7g"/>`,
		"fallback": "uix:toothbrush-kit",
	});
}

export default Component;
