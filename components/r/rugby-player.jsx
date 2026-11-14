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
		"content": `<style>.q5faspbwj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM3 21.5c0-4.25 3.5-7 7-7c1.056 0 2.113.251 3.073.717M14 21.5a7 7 0 0 1 7.5-7.5a7 7 0 0 1-7.5 7.5Z");
}
</style><path class="q5faspbwj"/>`,
		"fallback": "uix-sharp:rugby-player",
	});
}

export default Component;
