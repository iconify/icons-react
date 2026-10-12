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
		"content": `<style>.cky4xaczd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 16v-5.5a1.25 1.25 0 0 1 2.5 0V14H14a2.5 2.5 0 0 1 2.5 2.5v.5a4.25 4.25 0 0 1-4.25 4.25h-.75a3.75 3.75 0 0 1-3.75-3.75V17a1 1 0 0 1 1-1Zm2.5-1.5v2.25M11 6.5V4M7.94 7.93L6.02 6.32m8.04 1.61l1.92-1.61");
}
</style><path class="cky4xaczd"/>`,
		"fallback": "iconoven:tap-gesture",
	});
}

export default Component;
