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
		"content": `<style>.bp6dzleet {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.1 28.4c-.7 1.1-1.3 3-3.3 2.2m-16.9-2.2c.7 1.1 1.3 3 3.3 2.2m0 0c4-2 9.8-2.1 13.6 0");
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

.m7gj4lbhf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.9 28.4c-2-4.5-.8-9.8 3.1-12.9c4.2-3.5 10.4-3.3 14.4.4c3.5 3.2 4.5 8.3 2.7 12.6");
}
</style><circle class="cpk0fnbgt"/><path class="m7gj4lbhf"/><path class="bp6dzleet"/>`,
		"fallback": "arcticons:poparide",
	});
}

export default Component;
