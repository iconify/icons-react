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
		"content": `<style>.dh5nuddxy {
  cx: 14px;
  cy: 14px;
  r: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.gcrjc4bih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m32.309 6.5l-6.456 11.182a2 2 0 0 0 1.732 3h12.912a2 2 0 0 0 1.732-3L35.773 6.5a2 2 0 0 0-3.464 0");
}

.oxml-db7v {
  cx: 34px;
  cy: 34px;
  r: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.woxkl1bqk {
  width: 17px;
  height: 17px;
  x: 5.5px;
  y: 25.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
}
</style><circle class="dh5nuddxy"/><circle class="oxml-db7v"/><rect class="woxkl1bqk"/><path class="gcrjc4bih"/>`,
		"fallback": "arcticons:lawnicons",
	});
}

export default Component;
