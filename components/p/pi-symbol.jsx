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
		"content": `<style>.lz6xzbb7e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7h16M8.5 7v11.5m7-11.5v8.5q0 3.75 3 3");
}
</style><path class="lz6xzbb7e"/>`,
		"fallback": "uix-sharp:pi-symbol",
	});
}

export default Component;
