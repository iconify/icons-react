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

.oissuxj4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.608 38.5a15.05 15.05 0 0 0 1.313-6.601c0-7.894-3.842-7.894-3.842-15.788A15.1 15.1 0 0 1 23.395 9.5m8.792 29a15.05 15.05 0 0 0 1.313-6.601c0-7.894-3.842-7.894-3.842-15.787A15.1 15.1 0 0 1 30.974 9.5m-13.945 29a15.05 15.05 0 0 0 1.313-6.601c0-7.894-3.842-7.894-3.842-15.788A15.1 15.1 0 0 1 15.815 9.5");
}
</style><circle class="cpk0fnbgt"/><path class="oissuxj4v"/>`,
		"fallback": "arcticons:thermoworks",
	});
}

export default Component;
