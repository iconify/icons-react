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
		"content": `<style>.th586rb_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 9.5v29a4 4 0 0 0 4 4H24V24h18.5V9.5a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4m18.5 33L42.5 24");
}
</style><path class="th586rb_u"/>`,
		"fallback": "arcticons:paperlaunch",
	});
}

export default Component;
