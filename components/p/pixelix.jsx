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
		"content": `<style>.aa4-lvb4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.375 33.75h9.75v9.75h-9.75zm9.75-19.5h19.5v19.5h-19.5z");
}

.s2my15a3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.375 4.5h19.5V24h-19.5z");
}
</style><path class="aa4-lvb4b"/><path class="s2my15a3y"/>`,
		"fallback": "arcticons:pixelix",
	});
}

export default Component;
