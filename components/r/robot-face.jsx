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
		"content": `<style>.fvpssjb1y {
  d: path("M10.75 14.25V17m2.5-2.75V17");
}

.g_u9p_b6y {
  width: 3.25px;
  height: 3px;
  x: 13.75px;
  y: 8.75px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i4fqodbwn {
  width: 17.5px;
  height: 15.5px;
  x: 3.25px;
  y: 4.25px;
  rx: 4.5px;
}

.kkeq7-bob {
  width: 3.25px;
  height: 3px;
  x: 7px;
  y: 8.75px;
  rx: 1px;
}

.ydbcdi_tx {
  width: 8px;
  height: 2.75px;
  x: 8px;
  y: 14.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="i4fqodbwn"/><rect class="kkeq7-bob"/><rect class="g_u9p_b6y"/><rect class="ydbcdi_tx"/><path class="fvpssjb1y"/></g>`,
		"fallback": "iconoven:robot-face",
	});
}

export default Component;
