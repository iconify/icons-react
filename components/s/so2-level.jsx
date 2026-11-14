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
		"content": `<style>.lwoad2bzt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 21.5l1.75-9l-1-1.75h7l-1 1.75l1.75 9ZM7.5 8a2 2 0 0 1 1-3.75A3 3 0 0 1 14 4a2.5 2.5 0 0 1 4.5 1a1.75 1.75 0 0 1 .5 3Zm8.25 13v-2.5M18.5 21v-4.5m2.75 4.5v-6.5");
}
</style><path class="lwoad2bzt"/>`,
		"fallback": "uix:so2-level",
	});
}

export default Component;
