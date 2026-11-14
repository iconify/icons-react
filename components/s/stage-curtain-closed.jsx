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
		"content": `<style>.s_fapzbaz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19V6Q19.25 8.5 17 6q-2.25 2.5-5 0q-2.75 2.5-5 0q-2.25 2.5-4.5 0Zm1 7.25V20q2 1.75 4.25.5Q10 21.75 12 20q2 1.75 4.25.5q2.25 1.25 4.25-.5V9.75m-8.5 0V20");
}
</style><path class="s_fapzbaz"/>`,
		"fallback": "uix:stage-curtain-closed",
	});
}

export default Component;
