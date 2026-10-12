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

.ld656tbbe {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2.25px;
}

.rngpyteyv {
  d: path("M12 15.75c-3-2-3.5-4-3.5-5.5a1.75 1.75 0 0 1 3.5-1a1.75 1.75 0 0 1 3.5 1c0 1.5-.5 3.5-3.5 5.5");
}
</style><g class="hntgybcog"><rect class="ld656tbbe"/><path class="rngpyteyv"/></g>`,
		"fallback": "iconoven:playing-card",
	});
}

export default Component;
