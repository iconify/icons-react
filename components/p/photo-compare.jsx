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
		"content": `<style>.bfhnicc7r {
  d: path("M2.5 4h8v16h-8Zm11 0h8v16h-8Z");
}

.bj0tceb8a {
  d: path("m2.5 16l3-3.5l5 5m3-1.5l3-3.5l5 5M7.25 8h.01m10.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bfhnicc7r"/><path class="bj0tceb8a"/></g>`,
		"fallback": "uix-sharp:photo-compare",
	});
}

export default Component;
