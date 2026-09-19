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
		"content": `<style>.xzluatb5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 12.71c13.042-1.514 34.07 3.701 30.762 13.907s-21.054 7.34-21.054 7.34");
}

.zrl9fv-ag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 42.5h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4m3.659 0l6.953-28.986");
}
</style><path class="zrl9fv-ag"/><path class="xzluatb5y"/>`,
		"fallback": "arcticons:paypay",
	});
}

export default Component;
