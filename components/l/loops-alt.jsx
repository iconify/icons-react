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

.gcewahbir {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.5 24h5M15.75 38.289l-2.5 4.33m2.5-32.909l-2.5-4.33m7.574 13.12a1.5 1.5 0 0 0-.75 1.299V28.2a1.5 1.5 0 0 0 2.25 1.299l7.277-4.201a1.5 1.5 0 0 0 0-2.598l-7.277-4.2a1.5 1.5 0 0 0-1.5 0");
}

.xsqzccc6b {
  cx: 24px;
  cy: 24px;
  r: 16.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="xsqzccc6b"/><path class="gcewahbir"/>`,
		"fallback": "arcticons:loops-alt",
	});
}

export default Component;
