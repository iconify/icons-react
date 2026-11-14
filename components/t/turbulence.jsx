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
		"content": `<style>.s5jb_rb0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5H7A3.5 3.5 0 1 0 3.5 14m18-7.5H17a3.5 3.5 0 1 0 3.5 3.5m-18-3.5q2.25-2 4.5 0t4.5 0m1 11q2.25 2 4.5 0t4.5 0");
}
</style><path class="s5jb_rb0o"/>`,
		"fallback": "uix:turbulence",
	});
}

export default Component;
