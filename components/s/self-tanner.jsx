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
		"content": `<style>.y4r7wdbgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11.25h9l-1.25 7.25h-6.5ZM11 18.5h2a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 9.5 20a1.5 1.5 0 0 1 1.5-1.5m-1.5-10a2.5 2.5 0 0 1 5 0M12 3.25V2m4.5 3.75L17.75 5M7.5 5.75L6.25 5");
}
</style><path class="y4r7wdbgb"/>`,
		"fallback": "uix:self-tanner",
	});
}

export default Component;
