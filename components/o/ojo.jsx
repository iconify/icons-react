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
		"content": `<style>.kg9e_mbda {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 24a22.505 22.505 0 0 0-39 0");
}

.s2i3zqblw {
  cx: 24px;
  cy: 24px;
  r: 7.889px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v6tbjvz3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 24a22.505 22.505 0 0 0 39 0");
}
</style><path class="kg9e_mbda"/><circle class="s2i3zqblw"/><path class="v6tbjvz3x"/>`,
		"fallback": "arcticons:ojo",
	});
}

export default Component;
