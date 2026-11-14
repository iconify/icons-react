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
		"content": `<style>.b52lcdb4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.397 8.906l8.61-4.015a1.75 1.75 0 0 1 2.325.847l.212.453a1.75 1.75 0 0 1-.847 2.325l-8.61 4.015a1.75 1.75 0 0 1-2.325-.846l-.212-.453a1.75 1.75 0 0 1 .847-2.326M12 11.5L8 20m4-8.5l4 8.5m-4-8.5V20");
}
</style><path class="b52lcdb4d"/>`,
		"fallback": "uix:telescope-class",
	});
}

export default Component;
