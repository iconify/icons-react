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
		"content": `<style>.ep5xr8b0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18.5h19M6 18.5a6 6 0 0 1 12 0m-6-13v4m-6.25 2.75L4 10.5m14.25 1.75L20 10.5");
}
</style><path class="ep5xr8b0l"/>`,
		"fallback": "uix:sunshine-time",
	});
}

export default Component;
