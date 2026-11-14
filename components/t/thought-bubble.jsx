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
		"content": `<style>.sr7pnstjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 13.5h10a3.5 3.5 0 1 0-.5-7a4.5 4.5 0 1 0-9 0a3.5 3.5 0 1 0-.5 7m-.25 4a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-3.25 3a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><path class="sr7pnstjh"/>`,
		"fallback": "uix:thought-bubble",
	});
}

export default Component;
