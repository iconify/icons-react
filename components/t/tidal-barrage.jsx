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
		"content": `<style>.ruhkdvb_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13V5h19v8h-3v-3a1.5 1.5 0 0 0-3 0v3h-2v-3a1.5 1.5 0 0 0-3 0v3h-2v-3a1.5 1.5 0 0 0-3 0v3Zm0 4.5q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="ruhkdvb_h"/>`,
		"fallback": "uix-sharp:tidal-barrage",
	});
}

export default Component;
