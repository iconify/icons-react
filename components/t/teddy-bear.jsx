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
		"content": `<style>.bpor_fo6k {
  d: path("M5.544 9.222a2.75 2.75 0 1 1 3.849-3.23m5.214 0a2.75 2.75 0 1 1 3.849 3.23M9.5 15.75a2.5 2 0 1 0 5 0a2.5 2 0 1 0-5 0Zm-.25-4.25h.01m5.49 0h.01");
}

.ro8z8qbcv {
  d: path("M4.5 13a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ro8z8qbcv"/><path class="bpor_fo6k"/></g>`,
		"fallback": "uix-sharp:teddy-bear",
	});
}

export default Component;
