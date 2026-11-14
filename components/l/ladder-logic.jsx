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
		"content": `<style>.jqlry6b_a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v18m17-18v18M3.5 8H9m0-2.5v5m3-5v5M12 8h8.5m-17 8h6m5 0h6m-11 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><path class="jqlry6b_a"/>`,
		"fallback": "uix:ladder-logic",
	});
}

export default Component;
