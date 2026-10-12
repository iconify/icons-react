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
		"content": `<style>.bq-ll3dzm {
  d: path("M5.25 10.75h.9l1.6-2.05a.95.95 0 0 1 1.5 0l1.6 2.05h7.9a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5H5.25a2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 2.5-2.5m1.25 3.5h11m-11 3.25h7");
}

.hmlplkaik {
  width: 7px;
  height: 3.25px;
  x: 5px;
  y: 2.75px;
  rx: 1.625px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="hmlplkaik"/><path class="bq-ll3dzm"/></g>`,
		"fallback": "iconoven:popover",
	});
}

export default Component;
