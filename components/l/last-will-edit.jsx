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
		"content": `<style>.dsfrykczg {
  d: path("m11.5 17.5l-1 4l4-1");
}

.mt3ekc3pv {
  d: path("M8.1 19.5H3v-17h13v6.6M6 7h7m-7 4h5m.5 6.5l7-7l3 3l-7 7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mt3ekc3pv"/><path class="dsfrykczg"/></g>`,
		"fallback": "uix-sharp:last-will-edit",
	});
}

export default Component;
