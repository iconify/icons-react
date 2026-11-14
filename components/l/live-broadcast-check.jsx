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
		"content": `<style>.ztsp99b3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h6.5A3.5 3.5 0 0 1 16 7v5a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 12V7A3.5 3.5 0 0 1 6 3.5m10 4l5.5-3v8.535m-2.05.347L16 11.5m-4.5-4h.01M14.75 18l2 2L21 15.75");
}
</style><path class="ztsp99b3h"/>`,
		"fallback": "uix:live-broadcast-check",
	});
}

export default Component;
