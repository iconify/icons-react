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
		"content": `<style>.bvy47_beg {
  d: path("M3 10h17v11H3Z");
}

.fodjovn-y {
  d: path("M20 13.5h-3.25a1.75 1.75 0 0 0 0 3.5H20M5.5 4.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm7.75.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bvy47_beg"/><path class="fodjovn-y"/></g>`,
		"fallback": "uix-sharp:unrestricted-fund",
	});
}

export default Component;
