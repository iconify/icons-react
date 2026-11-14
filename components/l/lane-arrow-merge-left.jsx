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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v-_arvbep {
  d: path("M17.5 20.5v-4c0-4-8-4-8-8v-5");
}

.vwfzprbee {
  d: path("m6 7l3.5-3.5L13 7");
}
</style><g class="ulnmmdpxh"><path class="v-_arvbep"/><path class="vwfzprbee"/></g>`,
		"fallback": "uix-sharp:lane-arrow-merge-left",
	});
}

export default Component;
