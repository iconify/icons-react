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
		"content": `<style>.s06qd4byw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m3.79 12.72l21.24 29.06l17.76-12.99l-4.87-6.66l-11.1 8.12l-16.37-22.4Z");
}
</style><path class="s06qd4byw"/>`,
		"fallback": "arcticons:l-speed",
	});
}

export default Component;
