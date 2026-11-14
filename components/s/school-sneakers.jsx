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
		"content": `<style>.cqhuhlu_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16v-5c2.5 0 4-1 5-3.5l2.5 1c1 1.75 3 3 5 3.5l4.5 1c1.5.5 2 1.5 2 3v2h-19Zm0 2h19M9 11.5l2 1.5m.5-3.5l2 1.5");
}
</style><path class="cqhuhlu_s"/>`,
		"fallback": "uix:school-sneakers",
	});
}

export default Component;
