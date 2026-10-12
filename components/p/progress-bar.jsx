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
		"content": `<style>.d_8znhbno {
  d: path("M6.25 12h7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kgrlkn5lt {
  width: 18.5px;
  height: 7px;
  x: 2.75px;
  y: 8.5px;
  rx: 3.5px;
}
</style><g class="hntgybcog"><rect class="kgrlkn5lt"/><path class="d_8znhbno"/></g>`,
		"fallback": "iconoven:progress-bar",
	});
}

export default Component;
