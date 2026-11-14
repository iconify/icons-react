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
		"content": `<style>.qctfvgbrd {
  d: path("m8.75 9l1.75 2.25l1.5-1.5l1.5 1.5L15.25 9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjtyrzyfe {
  d: path("M2.5 20L12 3.5L21.5 20Z");
}
</style><g class="ulnmmdpxh"><path class="vjtyrzyfe"/><path class="qctfvgbrd"/></g>`,
		"fallback": "uix-sharp:snow-mountain-top",
	});
}

export default Component;
