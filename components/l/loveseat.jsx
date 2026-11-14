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
		"content": `<style>.hma0ejb7z {
  d: path("M4.5 10V8.5A2.5 2.5 0 0 1 7 6h10a2.5 2.5 0 0 1 2.5 2.5V10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z_h4iyytk {
  d: path("M2.5 12a2 2 0 0 1 4 0v2h11v-2a2 2 0 0 1 4 0v6h-19ZM12 6v12");
}
</style><g class="ulnmmdpxh"><path class="hma0ejb7z"/><path class="z_h4iyytk"/></g>`,
		"fallback": "uix-sharp:loveseat",
	});
}

export default Component;
