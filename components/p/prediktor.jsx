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
		"content": `<style>.t3-u293mr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.462 38.577l-3.924-3.923m3.924 3.923L38.538 42.5m3.924-3.923h-30.77M9.54 5.5v33.077h2.153M9.54 5.5l-4 4m4-4l4 4m-1.847 29.077c0-18.615 20.923-22.308 30.77-23.23");
}
</style><path class="t3-u293mr"/>`,
		"fallback": "arcticons:prediktor",
	});
}

export default Component;
