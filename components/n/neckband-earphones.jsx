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
		"content": `<style>.fja47rb1a {
  d: path("M5.5 6v6a6.5 6.5 0 0 0 13 0V6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ym9z0b8lf {
  d: path("M5.5 2.5za2 2 0 0 1 2 2V5a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.5a2 2 0 0 1 2-2m13 0za2 2 0 0 1 2 2V5a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.5a2 2 0 0 1 2-2");
}
</style><g class="hntgybcog"><path class="fja47rb1a"/><path class="ym9z0b8lf"/></g>`,
		"fallback": "uix:neckband-earphones",
	});
}

export default Component;
