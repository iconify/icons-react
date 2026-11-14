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
		"content": `<style>.wr_vvlx9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h1.5v16h7v-16H17m-8.5 16l-2.5 3h12l-2.5-3m-7-12h3m-3 3.5h3m-3 3.5h7");
}
</style><path class="wr_vvlx9e"/>`,
		"fallback": "uix:measuring-cylinder-scale",
	});
}

export default Component;
