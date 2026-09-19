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
		"content": `<style>.bdfttfblb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.476 27.281A4 4 0 0 1 24 29.3h0a4 4 0 0 1-4-4v-2.6a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4V24h-8");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="bdfttfblb"/>`,
		"fallback": "arcticons:letter-lowercase-circle-e",
	});
}

export default Component;
