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
		"content": `<style>.i8l-vra6m {
  d: path("M7 2.5h10V6H7ZM8 6L5 9v10a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V9l-3-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ysza2bc_q {
  d: path("M9.5 18c0-5 3-7.5 5-7.5c0 5-2.5 7.5-5 7.5Z");
}
</style><g class="ulnmmdpxh"><path class="i8l-vra6m"/><path class="ysza2bc_q"/></g>`,
		"fallback": "uix-sharp:specimen-preserved",
	});
}

export default Component;
