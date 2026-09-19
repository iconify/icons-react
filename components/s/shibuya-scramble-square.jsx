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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.lqelqki6o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m6.669 41.331l11.164-11.164L5.5 17.834M6.669 6.669l34.662 34.662");
}

.m62b9abtl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.167 11.667H42.5M24 17.834V5.5m-6.167 37v-37m0 12.333H42.5L17.833 42.5m12.333-24.667V5.5");
}
</style><rect class="j3s9ivbxi"/><path class="lqelqki6o"/><path class="m62b9abtl"/>`,
		"fallback": "arcticons:shibuya-scramble-square",
	});
}

export default Component;
