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

.km7bmwd7z {
  d: path("M3.75 4.25h16.5m-16.5-1.5v3m16.5-3v3");
}

.mkd1vjboj {
  d: path("M6.25 13h11.5m-11.5 4h11.5");
}

.pj4t9bx_j {
  width: 11.5px;
  height: 12.5px;
  x: 6.25px;
  y: 8.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><path class="km7bmwd7z"/><rect class="pj4t9bx_j"/><path class="mkd1vjboj"/></g>`,
		"fallback": "iconoven:max-tokens",
	});
}

export default Component;
