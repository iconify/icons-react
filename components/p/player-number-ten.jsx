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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rh7btbcjb {
  d: path("M8.25 12.75L9.5 11.5v7m2.75-3.5a1.75 3.5 0 1 0 3.5 0a1.75 3.5 0 1 0-3.5 0");
}

.vdff0qbro {
  d: path("M8.5 2.5q3.5 3 7 0L21.75 6l-2 4.5l-1.5-.75V21.5H5.75V9.75l-1.5.75l-2-4.5Z");
}
</style><g class="hntgybcog"><path class="vdff0qbro"/><path class="rh7btbcjb"/></g>`,
		"fallback": "uix:player-number-ten",
	});
}

export default Component;
