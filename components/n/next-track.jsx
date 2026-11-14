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
		"content": `<style>.d-zv626_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.889 8.476l2.561 2.195a1.75 1.75 0 0 1 0 2.658l-2.561 2.195A1.75 1.75 0 0 1 3 14.195v-4.39a1.75 1.75 0 0 1 2.889-1.329m7.5 0l2.561 2.195a1.75 1.75 0 0 1 0 2.658l-2.561 2.195a1.75 1.75 0 0 1-2.889-1.329v-4.39a1.75 1.75 0 0 1 2.889-1.329M20.5 6v12");
}
</style><path class="d-zv626_u"/>`,
		"fallback": "uix:next-track",
	});
}

export default Component;
