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
		"content": `<style>.qhcztpbhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.219 5.714H11.86A3.167 3.167 0 0 0 8.694 8.88v32.405a1 1 0 0 0 1.742.67l9.274-10.25a2 2 0 0 1 1.483-.658h5.446a12.667 12.667 0 0 0 12.665-12.904a12.943 12.943 0 0 0-13.085-12.43");
}
</style><path class="qhcztpbhj"/>`,
		"fallback": "arcticons:pixeldroid-alt",
	});
}

export default Component;
