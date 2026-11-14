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
		"content": `<style>.syuw_3pbr {
  d: path("M8 8c-1 1.5 1 3 0 4.5s1 3 0 4.5s1 3 0 4m4-13c-1 1.5 1 3 0 4.5s1 3 0 4.5s1 3 0 4m4-13c-1 1.5 1 3 0 4.5s1 3 0 4.5s1 3 0 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yp5o_kb6q {
  d: path("M3 3.5h18v11H3Z");
}
</style><g class="ulnmmdpxh"><path class="yp5o_kb6q"/><path class="syuw_3pbr"/></g>`,
		"fallback": "uix-sharp:rear-defrost",
	});
}

export default Component;
