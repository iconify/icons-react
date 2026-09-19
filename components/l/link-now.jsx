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
		"content": `<style>.l8kz7pbhe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.66 24.895c5.012 6.722 15.075 6.768 20.683 0");
}

.szo2qp1eh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.924 9.174H32.66c15.436 0 15.015 28.994-5.327 29.653v-3.67H16.225c-16.39 0-14.762-25.983-.301-25.983");
}
</style><path class="szo2qp1eh"/><path class="l8kz7pbhe"/>`,
		"fallback": "arcticons:link-now",
	});
}

export default Component;
