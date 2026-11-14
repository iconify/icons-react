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
		"content": `<style>.awjkif3ui {
  d: path("M13.344 20.5H3.5v-10L12 3.25l6.108 5.21m.457.389L20.5 10.5v1.856");
}

.h2qq0cbkg {
  d: path("M7.5 20.5v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m6.75-6.5l-2.5 4.5a2.5 2.5 0 0 0 5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="awjkif3ui"/><path class="h2qq0cbkg"/></g>`,
		"fallback": "uix-sharp:roof-leak",
	});
}

export default Component;
