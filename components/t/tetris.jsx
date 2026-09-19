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
		"content": `<style>.x0u_g9b9m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 37V24h13v13zm13 0V24h13v13zm0-13V11h13v13zm13 13V24h13v13z");
}
</style><path class="x0u_g9b9m"/>`,
		"fallback": "arcticons:tetris",
	});
}

export default Component;
