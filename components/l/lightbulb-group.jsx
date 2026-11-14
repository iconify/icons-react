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
		"content": `<style>.dw9xsqbrf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 9.25a3.5 3.5 0 1 1 2.5 0v1.5h-2.5Zm12 0a3.5 3.5 0 1 1 2.5 0v1.5h-2.5ZM10 17.5a4 4 0 1 1 4 0V19h-4Zm.75 4.25h2.5");
}
</style><path class="dw9xsqbrf"/>`,
		"fallback": "uix:lightbulb-group",
	});
}

export default Component;
