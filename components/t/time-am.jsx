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
		"content": `<style>.gi53z9b-m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5L6 6.5l3.5 11M4 13h4m4 4.5v-11l4.25 6l4.25-6v11");
}
</style><path class="gi53z9b-m"/>`,
		"fallback": "uix-sharp:time-am",
	});
}

export default Component;
