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
		"content": `<style>.wpjthqb5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20h19M6 20l-2.5-6M6 20v-8.5M6 20l2.5-6m6.5 6l-2.5-6m2.5 6v-9m0 9l2.5-6M16 6a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><path class="wpjthqb5y"/>`,
		"fallback": "uix-sharp:prairie",
	});
}

export default Component;
