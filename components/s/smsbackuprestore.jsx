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
		"content": `<style>.b53vd60gd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.47 7.28H6.53a2 2 0 0 0-2 1.88v22.25a2 2 0 0 0 2 1.88h2.61v7.43l8.26-7.43h24.07a2 2 0 0 0 2-1.88V9.16a2 2 0 0 0-2-1.88");
}

.wzywb8dvk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.61 28.6A8.47 8.47 0 0 0 30 14.3M22.38 12A8.47 8.47 0 0 0 18 26.27M29.39 14.9l-1.38 1.38v-3.8h3.8l-1.39 1.38zM18.61 25.67l1.38-1.38v3.8H16.2l1.38-1.38zM24 20.99v-5.96m4.01 8.07L24 20.99");
}
</style><path class="b53vd60gd"/><path class="wzywb8dvk"/>`,
		"fallback": "arcticons:smsbackuprestore",
	});
}

export default Component;
