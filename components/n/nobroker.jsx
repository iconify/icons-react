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

.kf4mpuwqu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.845 12.956l18.059 21.569");
}

.v0z-u4boq {
  cx: 29.412px;
  cy: 16.931px;
  r: 4.105px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z7ru-8brf {
  cx: 18.588px;
  cy: 31.069px;
  r: 4.105px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="kf4mpuwqu"/><circle class="v0z-u4boq"/><circle class="z7ru-8brf"/>`,
		"fallback": "arcticons:nobroker",
	});
}

export default Component;
