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

.jpo9d9bgw {
  d: path("M6.5 14.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.n3t0hpbnz {
  d: path("M10 14.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M12 6V3M6 8.5l-2-2m14 2l2-2");
}
</style><g class="hntgybcog"><path class="jpo9d9bgw"/><path class="n3t0hpbnz"/></g>`,
		"fallback": "uix:uv-sensor",
	});
}

export default Component;
