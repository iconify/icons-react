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
		"content": `<style>.cv09mr4md {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM3 21.5c0-4 3-6.25 6.5-6.25c1.173 0 2.289.253 3.256.739M16 3h3.5v6H16Zm1.75 6v3m-3 6l2 2L21 15.75");
}
</style><path class="cv09mr4md"/>`,
		"fallback": "uix-sharp:interview-mic-check",
	});
}

export default Component;
