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
		"content": `<style>.kgnfirb-y {
  d: path("M10 14.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM12 6V3M6 8.5l-2-2m14 2l2-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ym_viizjx {
  d: path("M6.5 14.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}
</style><g class="ulnmmdpxh"><path class="ym_viizjx"/><path class="kgnfirb-y"/></g>`,
		"fallback": "uix-sharp:uv-sensor",
	});
}

export default Component;
