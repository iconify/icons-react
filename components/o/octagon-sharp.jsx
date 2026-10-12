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
		"content": `<style>.d8-c7o-4t {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20 17.06L17.06 20l-1.23 1.24H8.17L6.94 20L4 17.06l-1.24-1.23V8.17L4 6.94L6.94 4l1.23-1.24h7.66L17.06 4L20 6.94l1.24 1.23v7.66z");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="d8-c7o-4t"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:octagon-sharp",
	});
}

export default Component;
