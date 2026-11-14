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
		"content": `<style>.zstuf4c7i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.625 9.5h10.75A2.625 2.625 0 0 1 20 12.125v5.75a2.625 2.625 0 0 1-2.625 2.625H6.625A2.625 2.625 0 0 1 4 17.875v-5.75A2.625 2.625 0 0 1 6.625 9.5M12 9.5v11m0-11C10.5 6 7 6 7.5 8C7.75 9 10 9.5 12 9.5S16.25 9 16.5 8c.5-2-3-2-4.5 1.5");
}
</style><path class="zstuf4c7i"/>`,
		"fallback": "uix:live-gift",
	});
}

export default Component;
