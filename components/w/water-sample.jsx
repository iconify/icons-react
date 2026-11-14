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
		"content": `<style>.i9y4kpb3g {
  d: path("M10 2.5v5.25a7 7 0 1 0 4 0V2.5m-5.5 0h7");
}

.pnskvqb1f {
  d: path("M5 15c2.5-1.5 4.5 1.5 7 0s4.5 1.5 7 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i9y4kpb3g"/><path class="pnskvqb1f"/></g>`,
		"fallback": "uix-sharp:water-sample",
	});
}

export default Component;
