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
		"content": `<style>.ppjc0mbvu {
  d: path("M14.25 12.5V4.75a2.75 2.75 0 0 1 5.5 0V15.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uty4b-b7c {
  d: path("M3.5 4H17v17.5H3.5ZM7 11h4.5M7 15h6");
}
</style><g class="ulnmmdpxh"><path class="uty4b-b7c"/><path class="ppjc0mbvu"/></g>`,
		"fallback": "uix-sharp:invoice-attachment",
	});
}

export default Component;
