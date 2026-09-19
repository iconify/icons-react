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
		"content": `<style>.e17l3plzb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m37.887 39.5l-3.676-8.261H13.79L10.113 39.5");
}

.k3v51kbso {
  cx: 32.995px;
  cy: 20.872px;
  r: 3.862px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.n042ubxtt {
  width: 39px;
  height: 31px;
  x: 4.5px;
  y: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.rai-kiz9k {
  cx: 15.005px;
  cy: 20.872px;
  r: 3.862px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="rai-kiz9k"/><path class="e17l3plzb"/><circle class="k3v51kbso"/><rect class="n042ubxtt"/>`,
		"fallback": "arcticons:subtracks",
	});
}

export default Component;
