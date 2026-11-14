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
		"content": `<style>.z762_lb5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 21V7a3 3 0 0 1 6 0v2m3 12V7a3 3 0 0 1 6 0v2m-15 3h9m-9 4.5h9");
}
</style><path class="z762_lb5q"/>`,
		"fallback": "uix-sharp:pool-ladder",
	});
}

export default Component;
