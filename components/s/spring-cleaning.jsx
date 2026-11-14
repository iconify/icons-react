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
		"content": `<style>.yg4j4rbiu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5v10m-3 0h6l2.5 9h-11Zm12 9V17c0-2.5 2-3.5 3-3.5c0 2-1.5 3.5-3 3.5m0 1.5c-1.25 0-1.75-1.25-1.75-2.5c1 0 1.75.75 1.75 2.5");
}
</style><path class="yg4j4rbiu"/>`,
		"fallback": "uix-sharp:spring-cleaning",
	});
}

export default Component;
