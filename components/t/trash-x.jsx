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
		"content": `<style>.qcv76wb_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.75 6.25l.85 12.2a2 2 0 0 0 2 1.8h6.8a2 2 0 0 0 2-1.8l.85-12.2Zm-2 0h16.5M9 6.25v-1.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v1.5m-4.75 4.5v5m3.5-5v5");
}
</style><path class="qcv76wb_k"/>`,
		"fallback": "iconoven:trash-x",
	});
}

export default Component;
