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
		"content": `<style>.q6uoalbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 16h12.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25H5.75a2.25 2.25 0 0 1-2.25-2.25A2.25 2.25 0 0 1 5.75 16m1-6.5h10.5a2.25 2.25 0 0 1 2.25 2.25A2.25 2.25 0 0 1 17.25 14H6.75a2.25 2.25 0 0 1-2.25-2.25A2.25 2.25 0 0 1 6.75 9.5m1-6.5h8.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25h-8.5A2.25 2.25 0 0 1 5.5 5.25A2.25 2.25 0 0 1 7.75 3");
}
</style><path class="q6uoalbhp"/>`,
		"fallback": "uix:towel-stack",
	});
}

export default Component;
