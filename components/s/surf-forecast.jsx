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
		"content": `<style>.n-qgdabjf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17C3.5 9 8 3 14 3c4 0 6.5 2.5 6.5 5.5c0 2.5-2 4-4 4c-1.75 0-3-1.25-3-3M2.5 17h9m4 4.5V19m2.75 2.5V17M21 21.5v-6");
}
</style><path class="n-qgdabjf"/>`,
		"fallback": "uix-sharp:surf-forecast",
	});
}

export default Component;
