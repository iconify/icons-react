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
		"content": `<style>.ymw1ag0kr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9h10a3 3 0 0 1 3 3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3a3 3 0 0 1 3-3m3.5 0v6m3-6v6M6.536 5.489a8.5 8.5 0 0 1 10.928 0m0 13.022a8.5 8.5 0 0 1-10.928 0");
}
</style><path class="ymw1ag0kr"/>`,
		"fallback": "uix:stir-bar",
	});
}

export default Component;
