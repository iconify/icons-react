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
		"content": `<style>.fmvcc9o5k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 8.5h9a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2a2 2 0 0 1 2-2m1.5 4h9a2 2 0 0 1 2 2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-2.5 4h9a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2a2 2 0 0 1 2-2M2.5 6V3.5h19V6");
}
</style><path class="fmvcc9o5k"/>`,
		"fallback": "uix:salary-cap",
	});
}

export default Component;
