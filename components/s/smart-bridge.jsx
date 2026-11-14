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
		"content": `<style>.advexre0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11.5h18V20H3Zm4 0L5 3m12 8.5L19 3M9 15.75h.01m2.99 0h.01m2.99 0h.01");
}
</style><path class="advexre0c"/>`,
		"fallback": "uix-sharp:smart-bridge",
	});
}

export default Component;
