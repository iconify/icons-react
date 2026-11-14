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
		"content": `<style>.r_1ti_lgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 9h12l-1.5 12h-9Zm7.5 0l8-6.5M4.5 13h11M5 17.25h10");
}
</style><path class="r_1ti_lgw"/>`,
		"fallback": "uix-sharp:sauna-room",
	});
}

export default Component;
