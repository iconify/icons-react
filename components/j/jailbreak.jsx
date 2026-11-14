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
		"content": `<style>.p1wuy6zuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h13v10.5H3Zm9.5 0V6.5a3.75 3.75 0 0 1 7.5 0v3m-10.5 5V18M5.25 8.25L3.5 6.5m5 1.5V5.5");
}
</style><path class="p1wuy6zuv"/>`,
		"fallback": "uix-sharp:jailbreak",
	});
}

export default Component;
