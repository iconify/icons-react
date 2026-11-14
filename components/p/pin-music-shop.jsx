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
		"content": `<style>.fugfefasg {
  d: path("M6.25 16a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.nry97wv9n {
  d: path("M9 11a5 5 0 1 0 4 4a3.5 3.5 0 1 0-4-4Zm6-2l3.25-3.25m2.03-4.152l2.122 2.122l-3.182 3.182l-2.122-2.122Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nry97wv9n"/><path class="fugfefasg"/></g>`,
		"fallback": "uix-sharp:pin-music-shop",
	});
}

export default Component;
