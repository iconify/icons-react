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
		"content": `<style>.bnfy7ebex {
  d: path("M2.5 2.5h19M7 2.5V7m10-4.5V7M2.5 7h19v13h-19Z");
}

.iuxl_9bdu {
  d: path("M6 16.5h10.5a3 3 0 0 0 0-6H8a2 2 0 0 0 0 4h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bnfy7ebex"/><path class="iuxl_9bdu"/></g>`,
		"fallback": "uix-sharp:stationery-aisle",
	});
}

export default Component;
