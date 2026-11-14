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
		"content": `<style>.ga8jgcb7e {
  d: path("M12 16.5q-1-6 2-10.5m0 0q-4-2.5-8.5.5M14 6q4-2.5 7.5 1M14 6q-3 1-6 5m6-5q3.5 1.5 4.5 5");
}

.glqecnbdi {
  d: path("M2.5 19.5h19M5 19.5q7-6 14 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="glqecnbdi"/><path class="ga8jgcb7e"/></g>`,
		"fallback": "uix-sharp:island-single-palm",
	});
}

export default Component;
