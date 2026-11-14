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
		"content": `<style>.ymmn3ac9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 8h7.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1a1 1 0 0 1 1-1m7.5 2v11.5m-17 0L9 8M7.5 21.5L13 8m1-3.5h7.5m-7.5 0V8m3.75-3.5V8m-13 10.75h4M6 15.5h4m-2.75-3.25h4");
}
</style><path class="ymmn3ac9v"/>`,
		"fallback": "uix:loft",
	});
}

export default Component;
