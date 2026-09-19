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

.iw1qnpbjm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.59 4.752v21.541a6.546 6.546 0 1 1-13.091 0v-4.586");
}

.jer7qkbdz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.953 43.011V21.707a6.546 6.546 0 1 1 13.092 0v4.586");
}
</style><circle class="cpk0fnbgt"/><path class="jer7qkbdz"/><path class="iw1qnpbjm"/>`,
		"fallback": "arcticons:noisefit",
	});
}

export default Component;
