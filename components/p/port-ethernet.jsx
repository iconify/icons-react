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
		"content": `<style>.ookfpib7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5h15v10.5H16V19H8v-3.5H4.5ZM8 8v2.5M10.75 8v2.5m2.5-2.5v2.5M16 8v2.5");
}
</style><path class="ookfpib7j"/>`,
		"fallback": "uix-sharp:port-ethernet",
	});
}

export default Component;
