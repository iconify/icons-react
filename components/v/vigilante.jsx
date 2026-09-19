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
		"content": `<style>.gyl_yoy1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.59 19.68v-2.99L24 15.19l-2.59 1.5v2.99l2.59 1.5z");
}

.o-qlskkey {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.22 7.93V13h2.43a1.82 1.82 0 0 1 1.62 2.67l-6.15 11.8a2.39 2.39 0 0 1-4.24 0l-6.15-11.8A1.82 1.82 0 0 1 17.35 13h2.43V7.93a2 2 0 0 0-2-2h-8.9a3.37 3.37 0 0 0-3 4.93l15.37 29.52a3.1 3.1 0 0 0 5.5 0l15.36-29.49a3.37 3.37 0 0 0-3-4.93h-8.92a2 2 0 0 0-1.97 1.97");
}
</style><path class="o-qlskkey"/><path class="gyl_yoy1m"/>`,
		"fallback": "arcticons:vigilante",
	});
}

export default Component;
