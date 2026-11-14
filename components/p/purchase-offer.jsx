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
		"content": `<style>.r8-azxb7p {
  d: path("M9.25 7.75L12 5.25l2.75 2.5V9.5h-5.5Z");
}

.tht_rfbft {
  d: path("M7 2.5h10A1.5 1.5 0 0 1 18.5 4v6.5A1.5 1.5 0 0 1 17 12H7a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 7 2.5Zm5 9.5v9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tht_rfbft"/><path class="r8-azxb7p"/></g>`,
		"fallback": "uix-sharp:purchase-offer",
	});
}

export default Component;
