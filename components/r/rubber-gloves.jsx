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
		"content": `<style>.mly4ogqji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 21.5l1.5-6l-3.75-3.75a1.5 1.5 0 0 1 2-2.25l.75.75V5a1.5 1.5 0 0 1 3 0v4v-5.25a1.5 1.5 0 0 1 3 0V9V5a1.5 1.5 0 0 1 3 0v8l-1 2.5l1.5 6Zm1-4h8");
}
</style><path class="mly4ogqji"/>`,
		"fallback": "uix:rubber-gloves",
	});
}

export default Component;
