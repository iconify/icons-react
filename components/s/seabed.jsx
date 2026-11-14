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
		"content": `<style>.q620v5bcp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5q2.375-2 4.75 0t4.75 0t4.75 0t4.75 0m-19 15h3c1-5.5 3.5-8 6.5-8s5.5 2.5 6.5 8h3");
}
</style><path class="q620v5bcp"/>`,
		"fallback": "uix:seabed",
	});
}

export default Component;
