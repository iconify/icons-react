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
		"content": `<style>.a7181ubik {
  width: 6px;
  height: 9.5px;
  x: 9px;
  y: 9px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tip2y0epd {
  d: path("M8.25 17.5c-3.25.4-5.5 1.15-5.5 2c0 1 4.15 1.75 9.25 1.75s9.25-.75 9.25-1.75c0-.85-2.25-1.6-5.5-2");
}

.wv5f_1brg {
  cx: 12px;
  cy: 5.25px;
  r: 2.5px;
}
</style><g class="hntgybcog"><circle class="wv5f_1brg"/><rect class="a7181ubik"/><path class="tip2y0epd"/></g>`,
		"fallback": "iconoven:street-view",
	});
}

export default Component;
