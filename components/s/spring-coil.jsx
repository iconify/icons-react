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
		"content": `<style>.db0mml2kj {
  d: path("M6.5 2.75h11m-5.5 0V5c5.5 0 5.5 2.5 0 2.5S6.5 10 12 10s5.5 2.5 0 2.5S6.5 15 12 15v1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.koz6vwrva {
  width: 8.5px;
  height: 4.75px;
  x: 7.75px;
  y: 16.5px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><path class="db0mml2kj"/><rect class="koz6vwrva"/></g>`,
		"fallback": "iconoven:spring-coil",
	});
}

export default Component;
