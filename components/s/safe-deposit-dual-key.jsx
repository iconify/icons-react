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
		"content": `<style>.qrlu6h8dc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm5.25 2.25L19.5 19.5M15 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm.75 2.25L4.5 19.5m12.75-2.25L15.5 19m-.5-4l-1.5 1.5m-6.75.75L8.5 19m.5-4l1.5 1.5");
}
</style><path class="qrlu6h8dc"/>`,
		"fallback": "uix-sharp:safe-deposit-dual-key",
	});
}

export default Component;
