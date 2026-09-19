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
		"content": `<style>.yj03ovbop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.387 30.864V7.887a3.387 3.387 0 1 0-6.774 0v22.977a6.77 6.77 0 0 0-3.388 5.861a6.775 6.775 0 0 0 13.55 0a6.77 6.77 0 0 0-3.387-5.86M24 14.557v-2.826m0 8.326V17.23m0 8.327V22.73m0 11.256V28.23");
}

.ytzydabje {
  cx: 24px;
  cy: 36.725px;
  r: 2.74px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="yj03ovbop"/><circle class="ytzydabje"/>`,
		"fallback": "arcticons:thermostat",
	});
}

export default Component;
