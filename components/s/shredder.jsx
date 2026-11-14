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
		"content": `<style>.o9vioq7_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.5h18v6H3Zm4.5 0v-5H14v5m-7.5 6V20m4-5.5V21m3.5-6.5v5m3.5-5V21");
}
</style><path class="o9vioq7_n"/>`,
		"fallback": "uix-sharp:shredder",
	});
}

export default Component;
