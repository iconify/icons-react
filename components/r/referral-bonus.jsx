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
		"content": `<style>.mj8oyeb3t {
  d: path("M11 15h10v5.5H11Zm2.25-8.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm3.25-1v2m-9-3h3M6.5 8H10");
}

.o12j5bcxd {
  d: path("M3 15h10v5.5H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o12j5bcxd"/><path class="mj8oyeb3t"/></g>`,
		"fallback": "uix-sharp:referral-bonus",
	});
}

export default Component;
