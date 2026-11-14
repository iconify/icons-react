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
		"content": `<style>.r2o86odbx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 10h15.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 4.25 10M4 13.5l1.5 6h13l1.5-6M4.5 6c1.5-1.5 3-1.5 5 0c1.5 1.5 3 1.5 5 0c1.5-1.5 3-1.5 5 0");
}
</style><path class="r2o86odbx"/>`,
		"fallback": "uix:paddling-pool",
	});
}

export default Component;
