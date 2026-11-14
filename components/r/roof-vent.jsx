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
		"content": `<style>.irjaribfd {
  d: path("M4.5 16v5.5h15V16m-5-4V9.5H17V14m-1.25-7.5v-4m-2 2l2-2l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xfkpu2byp {
  d: path("M2.5 17.5L12 10l9.5 7.5");
}
</style><g class="ulnmmdpxh"><path class="xfkpu2byp"/><path class="irjaribfd"/></g>`,
		"fallback": "uix-sharp:roof-vent",
	});
}

export default Component;
