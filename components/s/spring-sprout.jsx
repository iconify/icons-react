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
		"content": `<style>.boj3k0b7v {
  d: path("M4 20.5c1.5-4 14.5-4 16 0Z");
}

.e0w4zj40u {
  d: path("M12 17.5v-7c0-4 2.5-6.5 7-6.5c0 4-2.5 6.5-7 6.5m0 3c-4 0-7-2-7-6c4 0 6.5 2 7 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="boj3k0b7v"/><path class="e0w4zj40u"/></g>`,
		"fallback": "uix-sharp:spring-sprout",
	});
}

export default Component;
