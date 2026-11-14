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
		"content": `<style>.l1klj2bmj {
  d: path("M4 2.5h16v19H4ZM4 7h16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w83jmcbzu {
  d: path("M7.75 14.25a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="l1klj2bmj"/><path class="w83jmcbzu"/></g>`,
		"fallback": "uix-sharp:pin-laundry",
	});
}

export default Component;
