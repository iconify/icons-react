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
		"content": `<style>.asumc-56q {
  d: path("M8.75 5.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm-5.25 16V19c0-4.5 3.5-7 8.5-7s8.5 2.5 8.5 7v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yotb9slnr {
  d: path("M9.5 12.5L12 15l2.5-2.5M7.75 15h8.5v5.5h-8.5Zm2.75 2.75h3");
}
</style><g class="ulnmmdpxh"><path class="asumc-56q"/><path class="yotb9slnr"/></g>`,
		"fallback": "uix-sharp:press-accreditation",
	});
}

export default Component;
