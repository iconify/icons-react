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
		"content": `<style>.e5j6j6byq {
  d: path("M7 10h10l-2.5 6.5h-5Z");
}

.tve2gfbrx {
  d: path("M2.5 20.5V8L6 5l3 2l4-3.5l4 3l4.5-2v16Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tve2gfbrx"/><path class="e5j6j6byq"/></g>`,
		"fallback": "uix-sharp:stope",
	});
}

export default Component;
