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
		"content": `<style>.gvfoa8bax {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14v9.25h-6.75V20l-3.5-1.75l-3.75 2Zm3.5 3.5h7m-7 3h7m-.75 8.5l2 2L21 15.75");
}
</style><path class="gvfoa8bax"/>`,
		"fallback": "uix-sharp:pos-sale-complete",
	});
}

export default Component;
