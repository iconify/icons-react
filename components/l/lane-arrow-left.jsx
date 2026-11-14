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
		"content": `<style>.cpzc2zble {
  d: path("M17 20v-8.5a3 3 0 0 0-3-3H5");
}

.q0q_0wtau {
  d: path("M8.75 4.75L5 8.5l3.75 3.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cpzc2zble"/><path class="q0q_0wtau"/></g>`,
		"fallback": "uix-sharp:lane-arrow-left",
	});
}

export default Component;
