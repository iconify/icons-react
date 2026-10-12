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
		"content": `<style>.fe-646b6m {
  d: path("M9 5v2");
}

.h6dg2kbsg {
  d: path("M9 14.5v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wboy-rifc {
  d: path("M3.5 2.75v18.5m11-18.5v18.5m6-18.5v18.5m-17-9.5h17m-17.75 9.5h18.5m-6.75-17l6 5.25m0 4.5l-6 5.25");
}

.x21jzabnd {
  width: 6px;
  height: 6.75px;
  x: 6px;
  y: 14.5px;
  rx: 0.75px;
}

.y0k9m7b1n {
  width: 6px;
  height: 6.75px;
  x: 6px;
  y: 5px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><path class="wboy-rifc"/><rect class="y0k9m7b1n"/><path class="fe-646b6m"/><rect class="x21jzabnd"/><path class="h6dg2kbsg"/></g>`,
		"fallback": "iconoven:rack-storage",
	});
}

export default Component;
