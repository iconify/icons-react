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
		"content": `<style>.xfl7tv4mx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 15.5h1A1.75 1.75 0 0 1 7 17.25v1A1.75 1.75 0 0 1 5.25 20h-1a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 12.5 20h-1a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 19.75 20h-1A1.75 1.75 0 0 1 17 18.25v-1a1.75 1.75 0 0 1 1.75-1.75m.5-11v7M16.75 9l2.5 2.5l2.5-2.5");
}
</style><path class="xfl7tv4mx"/>`,
		"fallback": "uix:queue-waiting",
	});
}

export default Component;
