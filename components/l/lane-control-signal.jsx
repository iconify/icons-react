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
		"content": `<style>.gx1f74b3r {
  d: path("M2.5 4h8v8h-8Zm11 0h8v8h-8Zm-7 8v9.5m11-9.5v9.5M5 6.5l3 3m0-3l-3 3M17.5 6v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vxyaz8bbx {
  d: path("m16 8.5l1.5 1.5L19 8.5");
}
</style><g class="ulnmmdpxh"><path class="gx1f74b3r"/><path class="vxyaz8bbx"/></g>`,
		"fallback": "uix-sharp:lane-control-signal",
	});
}

export default Component;
