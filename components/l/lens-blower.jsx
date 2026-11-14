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
		"content": `<style>.i6lhp44uu {
  d: path("M3 15.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.rzsmeacgn {
  d: path("m11 11l5-4.25L17.25 8L13 13m5-9l1.75-1.75M20 6l1.75-1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i6lhp44uu"/><path class="rzsmeacgn"/></g>`,
		"fallback": "uix-sharp:lens-blower",
	});
}

export default Component;
