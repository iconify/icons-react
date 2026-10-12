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

.i-w9lbcqz {
  d: path("M8.25 13h7.5m-7.5 4h3M8 4.75a5.5 5.5 0 0 1 8 0m-5.75 2a2.5 2.5 0 0 1 3.5 0");
}

.u6xfwmbeg {
  width: 15px;
  height: 12.75px;
  x: 4.5px;
  y: 8.5px;
  rx: 3px;
}
</style><g class="hntgybcog"><rect class="u6xfwmbeg"/><path class="i-w9lbcqz"/></g>`,
		"fallback": "iconoven:smart-meter",
	});
}

export default Component;
