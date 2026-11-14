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
		"content": `<style>.t7mgplliv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 9h12.75A2.625 2.625 0 0 1 21 11.625v2.75A2.625 2.625 0 0 1 18.375 17H5.625A2.625 2.625 0 0 1 3 14.375v-2.75A2.625 2.625 0 0 1 5.625 9M7 9V3.5h10V9M7 17v4.5h10V17m0-4.5h.01");
}
</style><path class="t7mgplliv"/>`,
		"fallback": "uix:photocopier",
	});
}

export default Component;
