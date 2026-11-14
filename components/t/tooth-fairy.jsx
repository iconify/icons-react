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
		"content": `<style>.aghn9w70n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.068 14.09L12 13.75c-.25-1-2.75-1-3 0l-.75 3.75C8 19 6.25 19 6 17.5L5.25 13c-.5-2.25-1.75-3.5-1.75-6c0-2.75 1-4.5 3.5-4.5c1.75 0 2.25 1 3.5 1s1.75-1 3.5-1c2.5 0 3.5 1.75 3.5 4.5c0 1.539-.474 2.605-.955 3.722M16.5 13.5c.25 2.25.75 2.75 3 3c-2.25.25-2.75.75-3 3c-.25-2.25-.75-2.75-3-3c2.25-.25 2.75-.75 3-3M17 17l4 4");
}
</style><path class="aghn9w70n"/>`,
		"fallback": "uix:tooth-fairy",
	});
}

export default Component;
