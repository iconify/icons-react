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
		"content": `<style>.wfhtq1o0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21V8m-2-3a2 3 0 1 0 4 0a2 3 0 1 0-4 0m2 8.5Q10.25 9.25 5.5 9q1.75 4.25 6.5 4.5m0 3.75q1.75-4.25 6.5-4.5q-1.75 4.25-6.5 4.5M12 21q-1.75-4.25-6.5-4.5Q7.25 20.75 12 21");
}
</style><path class="wfhtq1o0j"/>`,
		"fallback": "uix:leaves-branch",
	});
}

export default Component;
