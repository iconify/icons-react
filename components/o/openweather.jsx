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
		"content": `<style>.y710xcb7m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.673 30.636a17.694 17.694 0 1 0-33.345 0M4.5 30.635h39M8.791 35.817h15.706m4.393 0h2.982m4.392 0h2.982m-24.64 5.181h19.757");
}
</style><path class="y710xcb7m"/>`,
		"fallback": "arcticons:openweather",
	});
}

export default Component;
