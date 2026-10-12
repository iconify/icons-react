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
		"content": `<style>.dt191fbhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 21.25V11c0-4.5 3.75-8.25 8.5-8.25c3.75 0 6.5 2.5 6.5 5.5c0 2-1.5 3.5-3.5 3.5c-1.5 0-2.5-1-2.5-2.25c0-.75.25-1.25.75-1.75c-3 .25-5 3-5 6.25v7.25Zm9.75-.6v-3.3q0-.6.48-.96l3.29-2.53q.48-.36.96 0l3.29 2.53q.48.36.48.96v3.3q0 .6-.6.6h-7.3q-.6 0-.6-.6");
}
</style><path class="dt191fbhh"/>`,
		"fallback": "iconoven:tsunami-wave",
	});
}

export default Component;
