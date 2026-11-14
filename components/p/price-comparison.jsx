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

.vwhb4qx-y {
  d: path("m2.5 10l4-4l4 4v11h-8Zm11-4l4-4l4 4v15h-8Z");
}

.zvp4on1hn {
  d: path("M5.5 10.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm11-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><g class="ulnmmdpxh"><path class="vwhb4qx-y"/><path class="zvp4on1hn"/></g>`,
		"fallback": "uix-sharp:price-comparison",
	});
}

export default Component;
