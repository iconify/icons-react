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

.n0s37qbiu {
  d: path("M8 4.5h8a5 5 0 0 1 5 5v11h-8v-6H8m0-5h.01");
}

.sveth0vyr {
  d: path("M3 9.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}
</style><g class="hntgybcog"><path class="sveth0vyr"/><path class="n0s37qbiu"/></g>`,
		"fallback": "uix:toilet-paper",
	});
}

export default Component;
