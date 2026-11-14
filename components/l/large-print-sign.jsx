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
		"content": `<style>.j_gfbybwh {
  d: path("M3 2.5h18V17H3ZM12 17v4.5");
}

.qm98t-bpr {
  d: path("m8 14l4-8.5l4 8.5m-6.75-2.5h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_gfbybwh"/><path class="qm98t-bpr"/></g>`,
		"fallback": "uix-sharp:large-print-sign",
	});
}

export default Component;
