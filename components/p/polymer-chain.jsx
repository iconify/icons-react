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

.k6yvejbfl {
  d: path("M3 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M16 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.vagx1xboz {
  d: path("M6.25 15.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m6.5-6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="k6yvejbfl"/><path class="vagx1xboz"/></g>`,
		"fallback": "uix:polymer-chain",
	});
}

export default Component;
