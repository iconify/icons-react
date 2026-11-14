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
		"content": `<style>.g4qq_g_df {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5L6.5 3l3 18.5M3 7h18M2.5 21.5h9m6-14.5v4m-3 0h6v4.5h-6Z");
}
</style><path class="g4qq_g_df"/>`,
		"fallback": "uix-sharp:pin-port-crane",
	});
}

export default Component;
