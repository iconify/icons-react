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
		"content": `<style>.fwyyj9yok {
  d: path("M8 2.5h8v5H8Zm-5.5 12H7V20H2.5Zm7.25 0h4.5V20h-4.5Zm7.25 0h4.5V20H17Zm-5-7v7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y0_7bcb8m {
  d: path("M4.75 14.5V11h14.5v3.5");
}
</style><g class="ulnmmdpxh"><path class="fwyyj9yok"/><path class="y0_7bcb8m"/></g>`,
		"fallback": "uix-sharp:treasury-multi-entity",
	});
}

export default Component;
