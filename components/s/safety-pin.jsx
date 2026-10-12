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
		"content": `<style>.biptrmb-n {
  width: 5px;
  height: 3.5px;
  x: 16.25px;
  y: 9px;
  rx: 1.25px;
}

.ciqzjkbdd {
  d: path("M2.75 13a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jvze7_51t {
  d: path("M5 10.75h11.25M5 15.25h11.5l2-2");
}
</style><g class="hntgybcog"><path class="ciqzjkbdd"/><path class="jvze7_51t"/><rect class="biptrmb-n"/></g>`,
		"fallback": "iconoven:safety-pin",
	});
}

export default Component;
