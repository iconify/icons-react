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
		"content": `<style>.epsnwobgb {
  d: path("M5.75 12.5a6.25 6.25 0 0 1 12.5 0v3.25a4.5 4.5 0 0 1-4.5 4.5h-3.5a4.5 4.5 0 0 1-4.5-4.5Zm0 1.75l-3-3.25m15.5-.5h.5a2.5 2.5 0 0 1 0 5h-.5M7 10.25h10");
}

.hjru5mbwv {
  cx: 12px;
  cy: 4px;
  r: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="epsnwobgb"/><circle class="hjru5mbwv"/></g>`,
		"fallback": "iconoven:teapot",
	});
}

export default Component;
