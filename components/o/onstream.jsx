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
		"content": `<style>.ic0f2ubqn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.243 14.887a17.304 17.304 0 0 1-22.247 25.47M9.294 35.46A17.304 17.304 0 0 1 25.011 7.739");
}

.vm172povf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.757 3.8L12.262 24.567l9.585 2.6L5.827 42.8l27.389-17.213l-11.675-3.263l21.54-15.278z");
}
</style><path class="ic0f2ubqn"/><path class="vm172povf"/>`,
		"fallback": "arcticons:onstream",
	});
}

export default Component;
