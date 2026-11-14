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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sbaw5nzls {
  d: path("M9.75 6h4.5A1.75 1.75 0 0 1 16 7.75v1a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 8 8.75v-1A1.75 1.75 0 0 1 9.75 6M8 14h8m-8 3.75h5");
}

.sqgzs9b2w {
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V6A3.5 3.5 0 0 1 8 2.5");
}
</style><g class="hntgybcog"><path class="sqgzs9b2w"/><path class="sbaw5nzls"/></g>`,
		"fallback": "uix:news-article",
	});
}

export default Component;
