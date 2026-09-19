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
		"content": `<style>.yorf2eboh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.647 14.903l8.346-8.962s7.414-3.242 10.74 0c2.669 2.6.754 7.867.754 7.867c-4.173 4.858-9.236 11.7-12.041 18.54l-12.71 3.518m16.61-23.494l-1.307 14.672");
}

.z20c8hbnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.848 43.5c1.697-9.276 15.676-27.632 19.498-31.128l-11.7 2.53L10.6 24.14s.842 4.986 2.546 10.935");
}
</style><path class="z20c8hbnk"/><path class="yorf2eboh"/>`,
		"fallback": "arcticons:robinhood-banking",
	});
}

export default Component;
