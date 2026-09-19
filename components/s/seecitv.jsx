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
		"content": `<style>.vtw68sbgq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.5 40.7c-3.7 3-8.4 4.8-13.5 4.8c-11.9 0-21.5-9.6-21.5-21.5S12.1 2.5 24 2.5c5.1 0 9.8 1.8 13.5 4.8");
}

.zk6xgsbse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.6 27.7c-3 12.1-19.3 15.4-26.7 5.2c-7.6-10 .3-24.7 12.8-24");
}
</style><path class="vtw68sbgq"/><path class="zk6xgsbse"/>`,
		"fallback": "arcticons:seecitv",
	});
}

export default Component;
