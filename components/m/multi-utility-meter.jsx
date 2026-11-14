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
		"content": `<style>.vi9x5u6mf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5a9.5 9.5 0 0 1 19 0m-19 0h19m-9.5 0L16.5 7m-9 8.25c2 2 2.5 3 2.5 3.75a2.5 2.5 0 0 1-5 0c0-.75.5-1.75 2.5-3.75Zm10 0L15 18.5h3.5l-2.5 3");
}
</style><path class="vi9x5u6mf"/>`,
		"fallback": "uix-sharp:multi-utility-meter",
	});
}

export default Component;
