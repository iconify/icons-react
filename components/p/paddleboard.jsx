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
		"content": `<style>.jx_361bac {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5c0-2.5 4-3 9.5-3s9.5 1 9.5 3s-4 3-9.5 3s-9.5-.5-9.5-3M8 18l6-10.5m2.5-4.415za1.5 1.5 0 0 1 .549 2.049l-1 1.732A1.5 1.5 0 0 1 14 7.415a1.5 1.5 0 0 1-.549-2.049l1-1.732a1.5 1.5 0 0 1 2.049-.549m-5 17.415q3-1.875 6 0c2 1.25 3 1 4 .5");
}
</style><path class="jx_361bac"/>`,
		"fallback": "uix:paddleboard",
	});
}

export default Component;
