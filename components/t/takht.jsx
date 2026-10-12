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
		"content": `<style>.ekar2cbqp {
  width: 9px;
  height: 3.75px;
  x: 4.5px;
  y: 7.25px;
  rx: 1.875px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m4ckxi65n {
  d: path("M4.5 14h3v5.75A1.25 1.25 0 0 1 6.25 21h-.5a1.25 1.25 0 0 1-1.25-1.25Zm12 0h3v5.75A1.25 1.25 0 0 1 18.25 21h-.5a1.25 1.25 0 0 1-1.25-1.25Z");
}

.v2orwfbhe {
  width: 18.5px;
  height: 3px;
  x: 2.75px;
  y: 11px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="v2orwfbhe"/><path class="m4ckxi65n"/><rect class="ekar2cbqp"/></g>`,
		"fallback": "iconoven:takht",
	});
}

export default Component;
