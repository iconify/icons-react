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
		"content": `<style>.ciyxetblx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24h37M24 5.5V24");
}

.l6cd208_p {
  cx: 24px;
  cy: 24px;
  r: 18.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rnymypbnc {
  width: 10px;
  height: 5px;
  x: 2.7px;
  y: 5.27px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
}

.yae6ep_xz {
  width: 5px;
  height: 10px;
  x: 37.58px;
  y: 2.77px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
}
</style><rect transform="rotate(-44.72 7.703 7.773)" class="rnymypbnc"/><rect transform="rotate(-45.28 40.074 7.778)" class="yae6ep_xz"/><circle class="l6cd208_p"/><path class="ciyxetblx"/>`,
		"fallback": "arcticons:suntimesalarms",
	});
}

export default Component;
