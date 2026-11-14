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
		"content": `<style>.l4o2yqa9w {
  d: path("M13.1 19H2.5V4h19v7.1");
}

.rwvcf1b3s {
  d: path("M6 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1.25 6.5c0-2 1.5-2.75 3.25-2.75s3.25.75 3.25 2.75m2.75-7h4.5m-3.75 12.75l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l4o2yqa9w"/><path class="rwvcf1b3s"/></g>`,
		"fallback": "uix-sharp:staff-discount-card",
	});
}

export default Component;
