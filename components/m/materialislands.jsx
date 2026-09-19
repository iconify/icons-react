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
		"content": `<style>.i00fn115b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.45 30.24L24 28.18h0l-13.45 2.06L24 4.5z");
}

.kt9bbdckf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.55 30.24L24 28.18h0l13.45 2.06L24 43.5zM24 4.5v39");
}
</style><path class="i00fn115b"/><path class="kt9bbdckf"/>`,
		"fallback": "arcticons:materialislands",
	});
}

export default Component;
