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
		"content": `<style>.ezhuzbbjy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21l9.5-9.5m0 0l5-5L19 8l-5 5Zm1-1L12 9m3.5-.5L14 7m3.5-.5L16 5");
}
</style><path class="ezhuzbbjy"/>`,
		"fallback": "uix-sharp:toothbrush",
	});
}

export default Component;
