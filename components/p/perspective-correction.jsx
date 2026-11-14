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
		"content": `<style>.c7sz0bm1r {
  d: path("M3 20.5h18l-3.5-17h-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x4j8rst2q {
  d: path("M9 7h6v10.5H9Z");
}
</style><g class="ulnmmdpxh"><path class="c7sz0bm1r"/><path class="x4j8rst2q"/></g>`,
		"fallback": "uix-sharp:perspective-correction",
	});
}

export default Component;
