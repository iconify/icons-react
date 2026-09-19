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
		"content": `<style>.fyatltbkw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.1 12.1h23.8v23.8H12.1z");
}

.iiltvgbgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5v6.6m0 23.8v6.6m0-28v19m9.5-9.5a9.5 9.5 0 0 1-9.5 9.5h0a9.5 9.5 0 0 1-9.5-9.5h0a9.5 9.5 0 0 1 9.5-9.5h0a9.5 9.5 0 0 1 9.5 9.5");
}

.j3s9ivbxi {
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
</style><path class="iiltvgbgt"/><path class="fyatltbkw"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:mergin-maps",
	});
}

export default Component;
