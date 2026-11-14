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
		"content": `<style>.dhddncc0c {
  d: path("M8 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-5.5 0H8m4 0h5.5M10 14v5.5M20.75 7v6.5m0 3.5h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uoszapb9r {
  d: path("M2.5 12a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}
</style><g class="hntgybcog"><path class="uoszapb9r"/><path class="dhddncc0c"/></g>`,
		"fallback": "uix:power-steering-warning",
	});
}

export default Component;
