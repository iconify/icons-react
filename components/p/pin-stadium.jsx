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
		"content": `<style>.gy1rp9bxb {
  d: path("M8 4.5h8a5.5 5.5 0 0 1 5.5 5.5v4a5.5 5.5 0 0 1-5.5 5.5H8A5.5 5.5 0 0 1 2.5 14v-4A5.5 5.5 0 0 1 8 4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ygjkdnbcd {
  d: path("M8 7.5h8a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H8A2.5 2.5 0 0 1 5.5 14v-4A2.5 2.5 0 0 1 8 7.5Zm4 0v9");
}
</style><g class="ulnmmdpxh"><path class="gy1rp9bxb"/><path class="ygjkdnbcd"/></g>`,
		"fallback": "uix-sharp:pin-stadium",
	});
}

export default Component;
