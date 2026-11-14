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
		"content": `<style>.vb4ybtbvb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17h19m-17 0V7m0 4q-2.25 0-2.25-2.75M4.5 11q2.25 0 2.25-2.75M12 17V7m0 4q-2.25 0-2.25-2.75M12 11q2.25 0 2.25-2.75M19.5 17V7m0 4q-2.25 0-2.25-2.75M19.5 11q2.25 0 2.25-2.75");
}
</style><path class="vb4ybtbvb"/>`,
		"fallback": "uix:seed-drill-row",
	});
}

export default Component;
