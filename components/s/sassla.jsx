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
		"content": `<style>.uy84dzb5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 20.015a10 10 0 0 1 10-10m-5 10a5 5 0 0 1 5-5M5.5 28.5h6.654l4.33-7.5l3.67 7.5L23 7l4.5 34l3.846-18l4.33 7.5H42.5");
}
</style><path class="uy84dzb5q"/>`,
		"fallback": "arcticons:sassla",
	});
}

export default Component;
