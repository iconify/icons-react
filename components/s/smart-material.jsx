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
		"content": `<style>.zy4zqjjyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 2.5h2.75A2.625 2.625 0 0 1 10.5 5.125v2.75A2.625 2.625 0 0 1 7.875 10.5h-2.75A2.625 2.625 0 0 1 2.5 7.875v-2.75A2.625 2.625 0 0 1 5.125 2.5m6.375 14a5 5 0 1 0 10 0a5 5 0 1 0-10 0m2-11.5c3 0 5 1.5 5 4m-2-2l2 2l2-2M8.75 19C7.5 19 5.5 17.5 5.5 15m-2 2l2-2l2 2");
}
</style><path class="zy4zqjjyt"/>`,
		"fallback": "uix:smart-material",
	});
}

export default Component;
