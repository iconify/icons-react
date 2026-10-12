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
		"content": `<style>.bvn8pdmli {
  width: 7.75px;
  height: 7px;
  x: 13.5px;
  y: 3px;
  rx: 1.5px;
}

.c0d86hb-h {
  width: 7.75px;
  height: 7px;
  x: 2.75px;
  y: 3px;
  rx: 1.5px;
}

.c27t4nc2l {
  d: path("M7.5 21.25a4.5 4.5 0 0 1 9 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.omcoudbor {
  cx: 12px;
  cy: 14.75px;
  r: 2.25px;
}

.z7dp1rb3v {
  d: path("m4.75 7l1.5-1.5l1.25 1l1.25-1.25M15.5 6.5h3.75");
}
</style><g class="hntgybcog"><rect class="c0d86hb-h"/><rect class="bvn8pdmli"/><path class="z7dp1rb3v"/><circle class="omcoudbor"/><path class="c27t4nc2l"/></g>`,
		"fallback": "iconoven:soc-monitor",
	});
}

export default Component;
