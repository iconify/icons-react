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
		"content": `<style>.d4l4xubqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5c0-3 2.75-5 6-5s6 2 6 5Zm2.75-12a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM18.5 21v-8m0 2.5c-2 0-2.75-1.25-2.75-2.75c1.75 0 2.75 1 2.75 2.75Zm0-2.5c0-2 1-3.25 2.75-3.25c0 2-1 3.25-2.75 3.25Z");
}
</style><path class="d4l4xubqq"/>`,
		"fallback": "uix-sharp:mentee",
	});
}

export default Component;
