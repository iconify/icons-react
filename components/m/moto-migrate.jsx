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
		"content": `<style>.cbmbec0pj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.833 18.583L32.25 24l-5.417 5.416");
}

.lsjospbfy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18 42.5h-6.5c-3.324 0-6-2.676-6-6v-25c0-3.324 2.676-6 6-6H18M20 20v-8.5c0-3.324 2.676-6 6-6h10.5c3.324 0 6 2.676 6 6v25c0 3.324-2.676 6-6 6H26c-3.324 0-6-2.676-6-6V28m-4-4h16.25");
}
</style><path class="lsjospbfy"/><path class="cbmbec0pj"/>`,
		"fallback": "arcticons:moto-migrate",
	});
}

export default Component;
