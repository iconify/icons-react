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
		"content": `<style>.hp9ld3byv {
  d: path("M2.5 3.5h19v17h-19Zm0 4.5h19");
}

.quwj-3b0b {
  d: path("M13 14.75L12 16l1 1.25m3.5-2.5l1 1.25l-1 1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v6vfl4bhi {
  d: path("M5 10.5L7 12l-2 1.5M5 17h2.5m2.5-6.5h9.5v8H10Zm0 2.5h9.5");
}
</style><g class="ulnmmdpxh"><path class="hp9ld3byv"/><path class="v6vfl4bhi"/><path class="quwj-3b0b"/></g>`,
		"fallback": "uix-sharp:subquery",
	});
}

export default Component;
