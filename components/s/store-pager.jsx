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
		"content": `<style>.dy4cmmk2o {
  d: path("M5.5 12a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.mnri06b6o {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 0h.01M3.5 8.5c-1 2-1 5 0 7m17-7c1 2 1 5 0 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dy4cmmk2o"/><path class="mnri06b6o"/></g>`,
		"fallback": "uix-sharp:store-pager",
	});
}

export default Component;
