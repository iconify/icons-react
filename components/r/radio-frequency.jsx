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
		"content": `<style>.coxkd1bxg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 2v10.5m3.5-16a5 5 0 0 1 0 7m-7-7a5 5 0 0 0 0 7M18 3a8.5 8.5 0 0 1 0 12M6 3a8.5 8.5 0 0 0 0 12");
}
</style><path class="coxkd1bxg"/>`,
		"fallback": "uix-sharp:radio-frequency",
	});
}

export default Component;
