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
		"content": `<style>.eztgyjb_y {
  cx: 15.75px;
  cy: 7.25px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pe5h595ur {
  d: path("M12 3v1.5m0 2.75v1.5m0 2.75V13m0 2.25v1.5m0 2.75V21");
}

.rf7lfwm4d {
  width: 2.5px;
  height: 8px;
  x: 18.5px;
  y: 11.5px;
  rx: 1.25px;
}

.t710zy75l {
  width: 2.5px;
  height: 8px;
  x: 3px;
  y: 4.5px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="t710zy75l"/><rect class="rf7lfwm4d"/><path class="pe5h595ur"/><circle class="eztgyjb_y"/></g>`,
		"fallback": "iconoven:pong",
	});
}

export default Component;
