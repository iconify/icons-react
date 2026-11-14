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
		"content": `<style>.g0w_6kv7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5V2.5H7m1.75 0h2.5m1.75 0h2.25m1.75 0h2.5V5m0 1.75V9m0 1.75v2.5m0 1.75v2.25m0 1.75v2.5H17m-1.75 0H13m-1.75 0h-2.5M7 21.5H4.5V19m0-1.75V15m0-1.75v-2.5M4.5 9V6.75M8 7.5v-1h1.75m1.5 0h1.5m1.5 0H16v1M16 9v1h-1.75m-1.5 0h-1.5m-1.5 0H8V9m0 5.75V13h1.75m1.5 0H13v1.75m0 1.5V18h-1.75m-1.5 0H8v-1.75");
}
</style><path class="g0w_6kv7z"/>`,
		"fallback": "uix-sharp:report-template",
	});
}

export default Component;
