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
		"content": `<style>.k_zpez8ik {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.97 22l.34-8.54l-6.14 1.08L4.5 31.73M25.37 7.75l6 32.5l12.13-2.67l-9.61-29.32z");
}

.qwbyixbjr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 31.73L25.37 7.75l1.65 8.96l-14.79 18.2z");
}
</style><path class="qwbyixbjr"/><path class="k_zpez8ik"/>`,
		"fallback": "arcticons:via",
	});
}

export default Component;
