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
		"content": `<style>.em4j34a7u {
  d: path("M2.5 6h19v12h-19Z");
}

.l0ezqo-ob {
  d: path("M6 10.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM2.5 16.5q4.5-3.5 9-1q5-4.5 10 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="em4j34a7u"/><path class="l0ezqo-ob"/></g>`,
		"fallback": "uix-sharp:shot-establishing",
	});
}

export default Component;
