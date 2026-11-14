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
		"content": `<style>.au8s5gbvx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.5h19v5h-19ZM3.5 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-.75 8c0-2.25 1.25-3.5 2.75-3.5s2.75 1.25 2.75 3.5ZM10 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-.75 8c0-2.25 1.25-3.5 2.75-3.5s2.75 1.25 2.75 3.5Zm7.25-8a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-.75 8c0-2.25 1.25-3.5 2.75-3.5s2.75 1.25 2.75 3.5Z");
}
</style><path class="au8s5gbvx"/>`,
		"fallback": "uix-sharp:shortlist",
	});
}

export default Component;
