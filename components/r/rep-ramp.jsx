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
		"content": `<style>.af66e0j-i {
  d: path("M10.572 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c2.043 0 3.854.52 5.185 1.421M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm8 13.5L17 18l1.5 1.5l3-3");
}

.m5nmg8bna {
  d: path("M19.25 16.5h2.25v2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="af66e0j-i"/><path class="m5nmg8bna"/></g>`,
		"fallback": "uix-sharp:rep-ramp",
	});
}

export default Component;
