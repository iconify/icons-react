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
		"content": `<style>.f4e-m9bgv {
  d: path("M9.034 18H2.5V9l4 2.5V9l4 2.5v-9h3v11.066m4-.066a4 4 0 1 1-4 4");
}

.ky2f7t9jd {
  d: path("m11.75 19.25l1.75-1.75l1.75 1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f4e-m9bgv"/><path class="ky2f7t9jd"/></g>`,
		"fallback": "uix-sharp:recovery-facility",
	});
}

export default Component;
