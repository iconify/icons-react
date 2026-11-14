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
		"content": `<style>.qx9xssb3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3l9 5l-9 5l-9-5Zm-9 9l9 5m-9-1l9 5m3-3h6");
}
</style><path class="qx9xssb3x"/>`,
		"fallback": "uix-sharp:layers-minus",
	});
}

export default Component;
