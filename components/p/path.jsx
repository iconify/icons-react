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
		"content": `<style>.kqa31eb8z {
  d: path("M9.5 18.5H14a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h4m2.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uxs7z_bvx {
  fill: currentColor;
  d: path("M3.25 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="kqa31eb8z"/><path class="uxs7z_bvx"/></g>`,
		"fallback": "uix-sharp:path",
	});
}

export default Component;
