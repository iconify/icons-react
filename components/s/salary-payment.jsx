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
		"content": `<style>.ekf2s55jf {
  d: path("M2.5 15H6l4 2.5h4.25a1.25 1.25 0 0 1 0 2.5H9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v5hx-wb2b {
  d: path("M2.5 21.5H13l7.25-4.75c1-.75.25-2.25-1-1.75l-3.75 2.5m-5-10a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3-1v2m-4-6V4m8-1.5V4");
}
</style><g class="ulnmmdpxh"><path class="ekf2s55jf"/><path class="v5hx-wb2b"/></g>`,
		"fallback": "uix-sharp:salary-payment",
	});
}

export default Component;
