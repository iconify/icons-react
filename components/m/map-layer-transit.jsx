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

.ld2v7gb1h {
  d: path("M8.25 16V6a2 2 0 0 1 2-2h9.25a2 2 0 0 1 2 2v10Z");
}

.x0_07e1bh {
  d: path("M9.75 17.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m6.75 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M8.25 10H21.5m-19-2h3m-3 5h3");
}
</style><g class="hntgybcog"><path class="ld2v7gb1h"/><path class="x0_07e1bh"/></g>`,
		"fallback": "uix:map-layer-transit",
	});
}

export default Component;
