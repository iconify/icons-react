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
		"content": `<style>.eq9fc6v_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h18M6.415 7.543l5.211-2.43a2.625 2.625 0 0 1 3.489 1.27l.739 1.586a2.625 2.625 0 0 1-1.269 3.488l-5.211 2.43a2.625 2.625 0 0 1-3.489-1.27l-.739-1.586a2.625 2.625 0 0 1 1.269-3.488M20.5 17.5a8 8 0 0 0-1.25-4.75");
}
</style><path class="eq9fc6v_l"/>`,
		"fallback": "uix:tilt-sensor",
	});
}

export default Component;
