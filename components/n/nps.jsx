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
		"content": `<style>.hxx20dbpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.75a9.5 9.5 0 0 1 19 0m-9.5 0l4.5-4.5m-4.5 4.5h.01");
}
</style><path class="hxx20dbpq"/>`,
		"fallback": "uix:nps",
	});
}

export default Component;
