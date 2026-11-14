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
		"content": `<style>.flqekybdu {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nqjs78bel {
  d: path("M6 4.5h12A3.5 3.5 0 0 1 21.5 8v5a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 13V8A3.5 3.5 0 0 1 6 4.5m-3.5 6h19m-4.5-6v6");
}
</style><g class="hntgybcog"><path class="nqjs78bel"/><path class="flqekybdu"/></g>`,
		"fallback": "uix:team-bus",
	});
}

export default Component;
