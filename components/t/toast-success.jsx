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
		"content": `<style>.wpjp8kxoo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.3 16.5H2.5v-12H20v8.3M6.5 10.5h.01m2.99 0H15m-.25 7.5l2 2L21 15.75");
}
</style><path class="wpjp8kxoo"/>`,
		"fallback": "uix-sharp:toast-success",
	});
}

export default Component;
