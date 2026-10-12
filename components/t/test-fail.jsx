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
		"content": `<style>.tedibq3vm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 2.75h2q1.25 0 1.25 1.25v3.5q0 1.25.56 2.37l5.13 10.26q.56 1.12-.69 1.12H4.75q-1.25 0-.69-1.12L9.19 9.87q.56-1.12.56-2.37V4q0-1.25 1.25-1.25m-1 11.5l4 4m0-4l-4 4");
}
</style><path class="tedibq3vm"/>`,
		"fallback": "iconoven:test-fail",
	});
}

export default Component;
