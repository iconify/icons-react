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
		"content": `<style>.igm-p082w {
  fill: currentColor;
  d: path("M5 10h9.5v4H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uykogrl1p {
  d: path("M2.5 7.5h19v9h-19Z");
}
</style><g class="ulnmmdpxh"><path class="uykogrl1p"/><path class="igm-p082w"/></g>`,
		"fallback": "uix-sharp:quota-progress",
	});
}

export default Component;
