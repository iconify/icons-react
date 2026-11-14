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
		"content": `<style>.z9kp3p5-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 3a6.5 6.5 0 1 0 4 9a5.5 5.5 0 0 1-4-9Zm7.5.25Q19 5 20.75 5.5Q19 6 18.5 7.75Q18 6 16.25 5.5Q18 5 18.5 3.25Zm.5 11.5q.5 1.25 1.75 1.75q-1.25.5-1.75 1.75q-.5-1.25-1.75-1.75Q18.5 16 19 14.75ZM12.5 18q.25 1.25 1.5 1.5q-1.25.25-1.5 1.5q-.25-1.25-1.5-1.5q1.25-.25 1.5-1.5Z");
}
</style><path class="z9kp3p5-b"/>`,
		"fallback": "uix-sharp:night-sky",
	});
}

export default Component;
