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

.l25xr6byt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.907 23.482c0-.88.713-1.593 1.593-1.593m-1.593 0v4.222m-29.281-.698c.39.508.88.698 1.563.698h.943a1.59 1.59 0 0 0 1.59-1.59v-.007a1.59 1.59 0 0 0-1.59-1.59h-1.04a1.59 1.59 0 0 1-1.592-1.59c0-.881.714-1.595 1.595-1.595h.938c.682 0 1.171.19 1.562.698m4.755 4.87a1.593 1.593 0 0 1-2.977-.789v-1.036a1.593 1.593 0 1 1 3.186 0V24h-3.186m21.732 1.307a1.593 1.593 0 0 1-2.977-.789v-1.036a1.593 1.593 0 1 1 3.186 0V24h-3.186m-9.558-.518a1.593 1.593 0 0 1 3.187 0v1.036a1.593 1.593 0 0 1-3.186 0z");
}

.m0wpz1byf {
  width: 3.186px;
  height: 4.221px;
  x: 28.35px;
  y: 21.889px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.593px;
  ry: 1.593px;
}

.ps6yle25m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.151 19.739v6.372h3.185m9.199-4.221v4.778a1.593 1.593 0 0 1-2.719 1.127");
}
</style><path class="ps6yle25m"/><rect transform="matrix(-1 0 0 -1 59.885 48)" class="m0wpz1byf"/><path class="l25xr6byt"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:seloger",
	});
}

export default Component;
