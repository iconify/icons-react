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
		"content": `<style>.cqqnlxbrz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5H21m-13-3v-3m4.5 3v-5m4.5 5v-7m-10.5 1l12-7m-3-.5l3 .5l-.5 3");
}
</style><path class="cqqnlxbrz"/>`,
		"fallback": "uix-sharp:sports-analytics",
	});
}

export default Component;
