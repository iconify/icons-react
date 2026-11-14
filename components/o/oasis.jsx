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
		"content": `<style>.cw6ia0zmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 20v-9m0 0c-3-1-5 0-6 2m6-2c3-1 5 0 6 2m-6-2c-1-2.5-2.5-3.5-4-3.5m4 3.5c1-2.5 2.5-3.5 4-3.5m-12.5 13Q8 18 12 20.5q4-2.5 8.5 0");
}
</style><path class="cw6ia0zmr"/>`,
		"fallback": "uix-sharp:oasis",
	});
}

export default Component;
