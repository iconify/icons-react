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

.wu8uxvb8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.75 19.228l-6 2.304l6 2.293l6-2.293Zm-6 7.252l6 2.292l6-2.292m-12-2.477l6 2.292l6-2.292");
}
</style><path class="p8t2csbzk"/><path class="wu8uxvb8r"/>`,
		"fallback": "arcticons:neo-backup",
	});
}

export default Component;
