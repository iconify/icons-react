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
		"content": `<style>.e_gx2bbia {
  d: path("M9.75 10.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM8.5 16.5h4m3-1l5 5m0-5l-5 5");
}

.i0n_bqfjj {
  d: path("M10 5.5v-3h4v3m-1.4 16H5v-16h14v7.6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i0n_bqfjj"/><path class="e_gx2bbia"/></g>`,
		"fallback": "uix-sharp:press-pass-x",
	});
}

export default Component;
