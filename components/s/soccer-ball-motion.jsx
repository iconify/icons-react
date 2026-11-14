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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w2_erp9qw {
  d: path("M15 8.75L18 11l-1 3.75h-4L12 11Zm0 0V5m3 6l3.75-1.25m-4.75 5l2 3m-6-3l-2 3M12 11L8.25 9.75m-6 2.25h3M3 16h3");
}

.xuntevcxx {
  d: path("M8 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}
</style><g class="ulnmmdpxh"><path class="xuntevcxx"/><path class="w2_erp9qw"/></g>`,
		"fallback": "uix-sharp:soccer-ball-motion",
	});
}

export default Component;
