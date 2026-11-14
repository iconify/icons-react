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
		"content": `<style>.g3fv5ukgr {
  d: path("m3 9l1.5-5h15L21 9m-1.5 2v.8m-15-.8v9.5H12");
}

.t2oqz8bzi {
  d: path("M3 9a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0M6.5 20.5v-5h4v5m4.5 1c0-5 2-7 6.5-7c0 4.5-2 7-6.5 7Zm0 0l4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g3fv5ukgr"/><path class="t2oqz8bzi"/></g>`,
		"fallback": "uix-sharp:organic-shop",
	});
}

export default Component;
