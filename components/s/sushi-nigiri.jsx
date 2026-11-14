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
		"content": `<style>.oynhzpbwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 12h8.5a3.25 3.25 0 0 1 3.25 3.25a3.25 3.25 0 0 1-3.25 3.25h-8.5a3.25 3.25 0 0 1-3.25-3.25A3.25 3.25 0 0 1 7.75 12M3.5 12C3.5 9.25 6 8 9 8h8c2.5 0 4 1.5 3.5 4ZM10 8l-1 4m5-4l-1 4");
}
</style><path class="oynhzpbwy"/>`,
		"fallback": "uix:sushi-nigiri",
	});
}

export default Component;
