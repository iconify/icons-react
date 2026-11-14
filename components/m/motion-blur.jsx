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
		"content": `<style>.sk0n9mbtj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M2.5 12h5m-3-4H8m-3.5 8H8");
}
</style><path class="sk0n9mbtj"/>`,
		"fallback": "uix:motion-blur",
	});
}

export default Component;
