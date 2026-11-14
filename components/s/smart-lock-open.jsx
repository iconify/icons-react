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
		"content": `<style>.j22kj5mgx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 10.5h9A3.5 3.5 0 0 1 20 14v4a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 18v-4a3.5 3.5 0 0 1 3.5-3.5m8 0V6a3.5 3.5 0 0 0-7 0v1.5m3.5 7v3");
}
</style><path class="j22kj5mgx"/>`,
		"fallback": "uix:smart-lock-open",
	});
}

export default Component;
