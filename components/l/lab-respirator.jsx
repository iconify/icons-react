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
		"content": `<style>.p8umvebrq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8.5q6.5-2.5 13 0V15q-6.5 4-13 0Zm0 .5C2 9 2 15 5.5 15m13-6c3.5 0 3.5 6 0 6M9 10.75h6M9 13.5h6");
}
</style><path class="p8umvebrq"/>`,
		"fallback": "uix-sharp:lab-respirator",
	});
}

export default Component;
