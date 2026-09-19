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
		"content": `<style>.qtxuyvbge {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 9.5v22.9h10.1v10.1h22.9c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4h-29c-2.2 0-4 1.8-4 4m0 22.9l10.1 10.1");
}
</style><path class="qtxuyvbge"/>`,
		"fallback": "arcticons:notes",
	});
}

export default Component;
