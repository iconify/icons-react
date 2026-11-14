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
		"content": `<style>.j1_jmubuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18c4-3.5 9.5-3.5 19 0m-19 3.5c5.5-2 12.5-2 19 0m-19-9C5 10 8.5 10 11 12m5 3.75V11m-3 0a2 2 0 0 1 .75-3.75a2.5 2.5 0 0 1 4.5 0A2 2 0 0 1 19 11Z");
}
</style><path class="j1_jmubuv"/>`,
		"fallback": "uix-sharp:rural-area",
	});
}

export default Component;
