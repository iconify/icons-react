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
		"content": `<style>.ck7-3h_jx {
  d: path("M15 4.5c-3.5-2.5-9.75-.75-10.25 6C4.25 17 9.5 21 13.5 19.75c2.5-.75 2.5-3.5 1-5L12.75 13l1.75-1.75c1.75-1.75 2.75-4.75.5-6.75Z");
}

.etc7zccbc {
  d: path("M15.5 13h4.75v8.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ck7-3h_jx"/><path class="etc7zccbc"/></g>`,
		"fallback": "iconoven:kidney-sharp",
	});
}

export default Component;
