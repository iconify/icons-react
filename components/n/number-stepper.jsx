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

.ppivxsiyc {
  d: path("M12 9.5v5M5.75 12h3m6.5 0h3m-1.5-1.5v3");
}

.yu83_7nba {
  width: 18.5px;
  height: 10px;
  x: 2.75px;
  y: 7px;
  rx: 3px;
}
</style><g class="hntgybcog"><rect class="yu83_7nba"/><path class="ppivxsiyc"/></g>`,
		"fallback": "iconoven:number-stepper",
	});
}

export default Component;
