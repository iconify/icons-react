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
		"content": `<style>.redrd4b1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.5h17l-2 9h-13Zm4 3h.01m2.99 0h.01m2.99 0h.01m2.99 0h.01M9 13.5h.01m2.99 0h.01m2.99 0h.01");
}
</style><path class="redrd4b1x"/>`,
		"fallback": "uix-sharp:port-serial",
	});
}

export default Component;
