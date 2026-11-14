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
		"content": `<style>.i71-ewb7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 6l3-3h16v6l-3 3h-16Zm0 0h16l3-3m-3 3v6M6 9h.01m4.24 0h.01m4.24 0h.01m-.26 8.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm4.75 2l2 2");
}
</style><path class="i71-ewb7l"/>`,
		"fallback": "uix-sharp:termite-inspection",
	});
}

export default Component;
