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
		"content": `<style>.vumq93xgc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 38.92V8.415l37 30.505V8.415M17.815 5.642V15M30.15 32v10.358M17.695 22.5v19.858M30.137 5.642V25");
}
</style><path class="vumq93xgc"/>`,
		"fallback": "arcticons:nomad",
	});
}

export default Component;
