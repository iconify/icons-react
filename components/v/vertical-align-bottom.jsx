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
		"content": `<style>.co2cc5uei {
  width: 5px;
  height: 8.25px;
  x: 13.75px;
  y: 8.5px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ubpdmogjl {
  d: path("M2.75 20.25h18.5");
}

.ywosoee9q {
  width: 5px;
  height: 13px;
  x: 5.25px;
  y: 3.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="ywosoee9q"/><rect class="co2cc5uei"/><path class="ubpdmogjl"/></g>`,
		"fallback": "iconoven:vertical-align-bottom",
	});
}

export default Component;
