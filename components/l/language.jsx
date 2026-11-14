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

.pouzf7kdk {
  d: path("M19.25 5c-.5 3.5-2.25 5.75-6 7");
}

.w6-sjebpg {
  d: path("m3 21l4-10l4 10m-6.5-3.5h5M13 5h8m-4-2.25V5m-2.25 0c.5 3.5 2.25 5.75 6 7");
}
</style><g class="hntgybcog"><path class="w6-sjebpg"/><path class="pouzf7kdk"/></g>`,
		"fallback": "uix:language",
	});
}

export default Component;
