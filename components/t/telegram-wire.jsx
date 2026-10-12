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
		"content": `<style>.vdh4-7xun {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3v18M4 7h8m0 0q4.5 4.5 9 1m-4 4.25l-2 3h3l-2 3");
}
</style><path class="vdh4-7xun"/>`,
		"fallback": "iconoven:telegram-wire",
	});
}

export default Component;
