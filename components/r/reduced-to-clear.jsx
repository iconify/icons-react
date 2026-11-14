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
		"content": `<style>.lidx3uovy {
  d: path("M2.5 6a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v9l-5 5h-12a2 2 0 0 1-2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yuoaabagq {
  d: path("M21.5 15H18a1.5 1.5 0 0 0-1.5 1.5V20M8 7v9.5m-3-3l3 3l3-3m2-1l5-5m-4.5.5h.01m4.24 4.25h.01");
}
</style><g class="ulnmmdpxh"><path class="lidx3uovy"/><path class="yuoaabagq"/></g>`,
		"fallback": "uix-sharp:reduced-to-clear",
	});
}

export default Component;
