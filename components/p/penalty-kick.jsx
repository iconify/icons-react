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
		"content": `<style>.ak6822b3i {
  d: path("M5 10.25a7 7 0 1 0 14 0a7 7 0 1 0-14 0ZM4.5 20.5h15");
}

.ru4ke0_5v {
  d: path("m12 7.75l2.5 1.75l-1 2.75h-3l-1-2.75Zm0 0v-4.5m2.5 6.25L18.75 8m-5.25 4.25L16 16m-5.5-3.75L8 16m1.5-6.5L5.25 8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ak6822b3i"/><path class="ru4ke0_5v"/></g>`,
		"fallback": "uix-sharp:penalty-kick",
	});
}

export default Component;
