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
		"content": `<style>.e9rnpc6cn {
  width: 5px;
  height: 9px;
  x: 13.75px;
  y: 7.5px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ijs0p36kx {
  d: path("M2.75 12h18.5");
}

.wbbb3na8m {
  width: 5px;
  height: 15.5px;
  x: 5.25px;
  y: 4.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="wbbb3na8m"/><rect class="e9rnpc6cn"/><path class="ijs0p36kx"/></g>`,
		"fallback": "iconoven:vertical-align-middle",
	});
}

export default Component;
