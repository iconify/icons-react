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
		"content": `<style>.xjlpou4md {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5h12V7h-12Zm0 7.25h12v4.5h-12Zm0 7.25h12v4.5h-12Zm-7-12.5l2 2l3-3m-5 8.25l2 2l3-3");
}
</style><path class="xjlpou4md"/>`,
		"fallback": "uix-sharp:poll-multi-choice",
	});
}

export default Component;
