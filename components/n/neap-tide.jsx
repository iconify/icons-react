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
		"content": `<style>.a8l0wcbdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 3.5a5 5 0 1 0 0 8a5 5 0 0 1 0-8ZM3 17q2.25-1.25 4.5 0t4.5 0t4.5 0t4.5 0M3 20.5q2.25-1.25 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="a8l0wcbdl"/>`,
		"fallback": "uix-sharp:neap-tide",
	});
}

export default Component;
