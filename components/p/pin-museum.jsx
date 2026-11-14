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
		"content": `<style>.rdna5cb9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3h11A1.5 1.5 0 0 1 19 4.5A1.5 1.5 0 0 1 17.5 6h-11A1.5 1.5 0 0 1 5 4.5A1.5 1.5 0 0 1 6.5 3M8 6v12m8-12v12m-9.25 0h10.5A1.75 1.75 0 0 1 19 19.75a1.75 1.75 0 0 1-1.75 1.75H6.75A1.75 1.75 0 0 1 5 19.75A1.75 1.75 0 0 1 6.75 18M12 8.5v7");
}
</style><path class="rdna5cb9f"/>`,
		"fallback": "uix:pin-museum",
	});
}

export default Component;
