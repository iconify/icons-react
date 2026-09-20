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
		"content": `<style>.kuff7bbdn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.135 42.5H10.5a5 5 0 0 1-5-5v-27a5 5 0 0 1 5-5h1.635m11.867 0h1.635a5 5 0 0 1 5 5v27a5 5 0 0 1-5 5h-1.635m11.863-37H37.5a5 5 0 0 1 5 5v27a5 5 0 0 1-5 5h-1.635");
}
</style><path class="kuff7bbdn"/>`,
		"fallback": "arcticons:shidianguji",
	});
}

export default Component;
