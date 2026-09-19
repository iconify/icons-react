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

.pzg6d-fxr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 17.8h-37m0 12.3h37m-12.3 0V17.8M17.8 30.1V17.8m15.4 0V5.5M24 17.8V5.5m-9.2 12.3V5.5");
}
</style><path class="pzg6d-fxr"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:pagan-music-sequencer",
	});
}

export default Component;
