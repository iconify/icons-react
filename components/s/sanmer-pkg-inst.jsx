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
		"content": `<style>.z-b7nhb4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.437 39.718V10.435h-4.62a2.316 2.316 0 1 1-.001-4.632h32.368a2.316 2.316 0 1 1 0 4.632q0 0 0 0h-4.632v29.283a2.316 2.316 0 1 1-4.621 0l.332-29.283H17.058v29.283a2.316 2.316 0 1 1-4.621 0");
}
</style><path class="z-b7nhb4f"/>`,
		"fallback": "arcticons:sanmer-pkg-inst",
	});
}

export default Component;
