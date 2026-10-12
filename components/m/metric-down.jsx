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
		"content": `<style>.b-3rs1bba {
  width: 4px;
  height: 8px;
  x: 9px;
  y: 13.25px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oeh_esbsg {
  d: path("M18 2.75V19.5m-3.25-3L18 19.75l3.25-3.25");
}

.qjmjw-bcr {
  width: 4px;
  height: 12px;
  x: 2.75px;
  y: 9.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="qjmjw-bcr"/><rect class="b-3rs1bba"/><path class="oeh_esbsg"/></g>`,
		"fallback": "iconoven:metric-down",
	});
}

export default Component;
