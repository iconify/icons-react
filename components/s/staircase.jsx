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
		"content": `<style>.i7e88_jdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.65V18.1q0-.6.6-.6h4.8q.6 0 .6-.6v-2.55q0-.6.6-.6h4.8q.6 0 .6-.6V10.6q0-.6.6-.6h5.3q.6 0 .6.6v10.05q0 .6-.6.6H3.35q-.6 0-.6-.6m3-3.15v-5.25m6 1.5V9m6 1V5.75m-14 7.58l16-8.66");
}
</style><path class="i7e88_jdc"/>`,
		"fallback": "iconoven:staircase",
	});
}

export default Component;
