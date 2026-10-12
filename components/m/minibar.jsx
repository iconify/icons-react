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
		"content": `<style>.b8vmj2b3u {
  width: 3px;
  height: 3px;
  x: 13.75px;
  y: 8.75px;
  rx: 1px;
}

.h81zrmtfz {
  width: 15.5px;
  height: 18.5px;
  x: 4.25px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jbh9qgbsn {
  d: path("M9.25 7.25v-1.5");
}

.lxlrv_brw {
  d: path("M15.25 8.75v-1.5m-11 7.5h15.5m-3 2.5v1.5");
}

.y6mqrlzan {
  width: 3px;
  height: 4.5px;
  x: 7.75px;
  y: 7.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="h81zrmtfz"/><rect class="y6mqrlzan"/><path class="jbh9qgbsn"/><rect class="b8vmj2b3u"/><path class="lxlrv_brw"/></g>`,
		"fallback": "iconoven:minibar",
	});
}

export default Component;
