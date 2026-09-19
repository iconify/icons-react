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
		"content": `<style>.p8t2csbzk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.144 30.894A9.75 9.75 0 1 1 14.25 14.25c5.385 0 7.85 5.287 9.75 9.75c2.11 4.954 4.365 9.75 9.75 9.75a9.75 9.75 0 1 0-6.894-16.644M7.75 24h13m-11-4h9m-9 8h9");
}

.wm0jo_bqc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.263 20H37.8a1 1 0 0 1 1 1v7l-1.59-.762l-1.59.762l-1.59-.762l-1.59.762l-1.59-.762l-1.587.762v-7a1 1 0 0 1 1-1m1.855 2.517h3.827m-3.827 2.587h3.827");
}
</style><path class="wm0jo_bqc"/><path class="p8t2csbzk"/>`,
		"fallback": "arcticons:neo-feed",
	});
}

export default Component;
