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
		"content": `<style>.bkep2if4s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14l-2 3v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-14ZM7 15h10M7 9h3.5M7 12h3.5");
}
</style><path class="bkep2if4s"/>`,
		"fallback": "uix-sharp:rain-gauge-reading",
	});
}

export default Component;
