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
		"content": `<style>.c8d2p22ma {
  d: path("M5 7.5h14L20.5 21h-17Zm-.5-3h15m-7.5 0v3");
}

.gm7bwvbra {
  d: path("M8 14.25a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm4 0v-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c8d2p22ma"/><path class="gm7bwvbra"/></g>`,
		"fallback": "uix-sharp:tare-scale",
	});
}

export default Component;
