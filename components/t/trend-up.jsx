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
		"content": `<style>.hkg8_gt-w {
  d: path("M15.5 7h5v5");
}

.r-07k_b6z {
  d: path("m3 18l5-5.5l4 3L20.5 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r-07k_b6z"/><path class="hkg8_gt-w"/></g>`,
		"fallback": "uix-sharp:trend-up",
	});
}

export default Component;
