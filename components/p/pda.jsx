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
		"content": `<style>.r8m762e4d {
  d: path("M2.5 2.5H15v19H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y__wl9brl {
  d: path("M5.5 5.5H12V12H5.5Zm1.75 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM21 3.5l-3 17");
}
</style><g class="ulnmmdpxh"><path class="r8m762e4d"/><path class="y__wl9brl"/></g>`,
		"fallback": "uix-sharp:pda",
	});
}

export default Component;
