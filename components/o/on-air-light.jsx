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
		"content": `<style>.qapa39-rl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 20v-3.5a6 6 0 0 1 12 0V20M3.5 20h17M12 4v3M5 7l2 2m12-2l-2 2");
}
</style><path class="qapa39-rl"/>`,
		"fallback": "uix-sharp:on-air-light",
	});
}

export default Component;
