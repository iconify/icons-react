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

.lso5v71ln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m32.738 22.771l-9.874-8.114c-1.038-.853-2.601-.115-2.601 1.229v16.228c0 1.344 1.563 2.082 2.6 1.229l9.875-8.114a1.59 1.59 0 0 0 0-2.458");
}
</style><circle class="cpk0fnbgt"/><path class="lso5v71ln"/>`,
		"fallback": "arcticons:mediaexpert",
	});
}

export default Component;
