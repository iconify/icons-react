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
		"content": `<style>.e5rma-bat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.284 10.824H8.716A4.216 4.216 0 0 0 4.5 15.04v17.92a4.216 4.216 0 0 0 4.216 4.216h30.568a4.216 4.216 0 0 0 4.216-4.217V15.041a4.216 4.216 0 0 0-4.216-4.217");
}

.gdht4sb7j {
  cx: 24px;
  cy: 24px;
  r: 7.905px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sfndxs8at {
  cx: 37.703px;
  cy: 16.622px;
  r: 2.635px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="e5rma-bat"/><circle class="gdht4sb7j"/><circle class="sfndxs8at"/>`,
		"fallback": "arcticons:samsung-camera",
	});
}

export default Component;
