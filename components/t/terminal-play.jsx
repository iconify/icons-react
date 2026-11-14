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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iwmyaxv-z {
  d: path("M6.875 3h10.25A4.375 4.375 0 0 1 21.5 7.375v9.25A4.375 4.375 0 0 1 17.125 21H6.875A4.375 4.375 0 0 1 2.5 16.625v-9.25A4.375 4.375 0 0 1 6.875 3");
}

.rm2caobob {
  d: path("m6 7l2.5 2.5L6 12m8.286-.593l2.138 1.316a1.5 1.5 0 0 1 0 2.554l-2.138 1.316A1.5 1.5 0 0 1 12 15.316v-2.632a1.5 1.5 0 0 1 2.286-1.277");
}
</style><g class="hntgybcog"><path class="iwmyaxv-z"/><path class="rm2caobob"/></g>`,
		"fallback": "uix:terminal-play",
	});
}

export default Component;
