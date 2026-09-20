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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ds5_erbin {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  d: path("M31.11 27.69a5.43 5.43 0 0 1 5.54-5.28m-5.54 0v14");
}

.gyo4ojv-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.89 13.41v14a7.11 7.11 0 1 0 14.22 0v-14");
}
</style><circle class="cpk0fnbgt"/><path class="gyo4ojv-s"/><path class="ds5_erbin"/>`,
		"fallback": "arcticons:urecord",
	});
}

export default Component;
