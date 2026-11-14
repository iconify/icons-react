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
		"content": `<style>.puc_10b_d {
  d: path("m10 8l2-2l2 2m-4 8l2 2l2-2m-6-6l-2 2l2 2m8-4l2 2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w2iy5ibvs {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM12 6v12m-6-6h12");
}
</style><g class="ulnmmdpxh"><path class="w2iy5ibvs"/><path class="puc_10b_d"/></g>`,
		"fallback": "uix-sharp:move-circle",
	});
}

export default Component;
