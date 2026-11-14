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
		"content": `<style>.fd5uiqlhl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12H8m8 0h5.5m-17 7.5l4.75-4.75m5.5-5.5L19.5 4.5M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}
</style><path class="fd5uiqlhl"/>`,
		"fallback": "uix:interchange",
	});
}

export default Component;
