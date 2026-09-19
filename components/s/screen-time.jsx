import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b557embzk {
  width: 5.189px;
  height: 31.624px;
  x: 13.453px;
  y: 5.537px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}

.c05ag_i1s {
  width: 5.189px;
  height: 15.895px;
  x: 29.358px;
  y: 21.266px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}

.eg8_s-cqk {
  width: 37px;
  height: 2.817px;
  x: 5.5px;
  y: 39.646px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.408px;
  ry: 1.408px;
}

.s5dsjdado {
  width: 5.189px;
  height: 26.373px;
  x: 21.405px;
  y: 10.788px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}

.t00ef13at {
  width: 5.189px;
  height: 21.178px;
  x: 37.311px;
  y: 15.983px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}

.te55jqqmw {
  width: 5.189px;
  height: 21.178px;
  x: 5.5px;
  y: 15.983px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}
</style><rect class="eg8_s-cqk"/><rect class="te55jqqmw"/><rect class="b557embzk"/><rect class="s5dsjdado"/><rect class="c05ag_i1s"/><rect class="t00ef13at"/>`,
		"fallback": "arcticons:screen-time",
	});
}

export default Component;
