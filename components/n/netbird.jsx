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
		"content": `<style>.ircy-ibfy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.153 37.77h15.93L42.5 10.43s-7.968-.024-11.82 0s-5.46 2.787-6.784 4.762S11.153 37.77 11.153 37.77");
}

.u539pxbop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.083 37.77L5.5 14.72s11.717-2.053 18.278.785s8.649 12.783 8.649 12.783z");
}
</style><path class="ircy-ibfy"/><path class="u539pxbop"/>`,
		"fallback": "arcticons:netbird",
	});
}

export default Component;
