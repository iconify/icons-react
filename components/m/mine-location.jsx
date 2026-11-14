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
		"content": `<style>.gfpeid5-t {
  d: path("M10.25 7.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-7.75 13l1.75-3L8 16.25l4-.75l4.5 1l3.25 1.5l1.75 2.5Zm6 0l1-1.75m6 1.75l-1-1.75");
}

.o15sgzkqh {
  d: path("M12 15.5s-5-4-5-8a5 5 0 0 1 10 0c0 4-5 8-5 8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o15sgzkqh"/><path class="gfpeid5-t"/></g>`,
		"fallback": "uix-sharp:mine-location",
	});
}

export default Component;
