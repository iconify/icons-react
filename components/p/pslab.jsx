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
		"content": `<style>.domodccif {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.8 38.73L29 17.16v-9h1.32a1.81 1.81 0 1 0 0-3.62h-12.7a1.81 1.81 0 0 0 0 3.62h1.32v9L5.2 38.73a1.7 1.7 0 0 0-.29 1a1.79 1.79 0 0 0 1.81 1.77h34.56a1.81 1.81 0 0 0 1.59-.94a1.77 1.77 0 0 0-.07-1.83m-31.41-9.65h25.22");
}
</style><path class="domodccif"/>`,
		"fallback": "arcticons:pslab",
	});
}

export default Component;
