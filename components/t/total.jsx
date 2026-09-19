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
		"content": `<style>.dtbr53lgc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 8.832h-37l4.986 8.761h8.341v13.374L24 39.168l5.172-8.201V17.593h8.342z");
}
</style><path class="dtbr53lgc"/>`,
		"fallback": "arcticons:total",
	});
}

export default Component;
