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
		"content": `<style>.qvj567l4l {
  d: path("m7.5 11l4-3l4 3.5M18 9h2.5M18 12h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w5t7ypb8d {
  d: path("M11.5 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm1 3.5l-2 6l3 3V21m-3-7.5l-2 4l-2.5 3");
}
</style><g class="ulnmmdpxh"><path class="w5t7ypb8d"/><path class="qvj567l4l"/></g>`,
		"fallback": "uix-sharp:store-walk",
	});
}

export default Component;
