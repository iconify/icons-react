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
		"content": `<style>.d2nyg-kmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5a2 2 0 0 1 2-2H11a2 2 0 0 1 2 2V9a2 2 0 0 1-2 2H7l-2.5 2.5V11a2 2 0 0 1-2-2Zm15.5 0v6.25M16.25 9L18 10.75L19.75 9m-3.25 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-3 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-1.75-4.25l-1.5 3M18.5 16l1.5 2.75");
}
</style><path class="d2nyg-kmr"/>`,
		"fallback": "uix:nlp",
	});
}

export default Component;
