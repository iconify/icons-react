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
		"content": `<style>.dc-rd_bfo {
  d: path("M7 15.75h5V21H7ZM14.5 6A3.5 3.5 0 0 1 18 9.5m-3.5-7a7 7 0 0 1 7 7");
}

.tgh67sb7j {
  d: path("m2.5 13.5l2.25-4L9 7.5l4 2l2.25 4V21H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tgh67sb7j"/><path class="dc-rd_bfo"/></g>`,
		"fallback": "uix-sharp:smart-farm",
	});
}

export default Component;
