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
		"content": `<style>.wyfnj7w7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.125 2.5h9.75A2.625 2.625 0 0 1 19.5 5.125v.75A2.625 2.625 0 0 1 16.875 8.5h-9.75A2.625 2.625 0 0 1 4.5 5.875v-.75A2.625 2.625 0 0 1 7.125 2.5M12 8.5v13m-4 0h8m-7.5-16h.01m3.49 0h.01m3.49 0h.01");
}
</style><path class="wyfnj7w7k"/>`,
		"fallback": "uix:stadium-lights",
	});
}

export default Component;
