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
		"content": `<style>.dqe_w3bxl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 18.75c0-9.5 5.5-15 15-15c0 9.5-5.5 15-15 15Zm-1.5 1.5l1.5-1.5m0 0l8.25-8.25m5.75 5s-2 2.5-2 4.25a2 2 0 0 0 4 0c0-1.75-2-4.25-2-4.25Zm-14.5-13S3 4.75 3 6a1.75 1.75 0 0 0 3.5 0c0-1.25-1.75-3.5-1.75-3.5Z");
}
</style><path class="dqe_w3bxl"/>`,
		"fallback": "uix-sharp:water-drops-leaf",
	});
}

export default Component;
