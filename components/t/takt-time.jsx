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
		"content": `<style>.bv7ibglfw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.086 20.5h5.828a1.75 1.75 0 0 0 1.724-2.054l-2.383-13.5A1.75 1.75 0 0 0 12.532 3.5h-1.064a1.75 1.75 0 0 0-1.723 1.446l-2.383 13.5A1.75 1.75 0 0 0 9.086 20.5m2.914-4L15.5 7M9 16.5h6");
}
</style><path class="bv7ibglfw"/>`,
		"fallback": "uix:takt-time",
	});
}

export default Component;
