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
		"content": `<style>.e3p5v-b0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h11v8h-11Zm9.5 8l8.5 9.5M2.5 7h11M8 3v8");
}
</style><path class="e3p5v-b0s"/>`,
		"fallback": "uix-sharp:pool-skimmer",
	});
}

export default Component;
