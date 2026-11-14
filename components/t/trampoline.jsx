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
		"content": `<style>.uvkd9rbvn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a9.5 3.5 0 1 0 19 0a9.5 3.5 0 1 0-19 0Zm2 2.25V19M9 15.25v5.25m6-5.25v5.25m4.5-6.25V19M8.5 5.5q3.5-4 7 0");
}
</style><path class="uvkd9rbvn"/>`,
		"fallback": "uix-sharp:trampoline",
	});
}

export default Component;
