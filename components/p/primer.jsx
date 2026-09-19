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
		"content": `<style>.omh3qcn1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 42.5c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4h29c2.216 0 4 1.784 4 4m0 18.037c0 2.216-1.784 4-4 4M26.056 38.5c0 2.216-1.785 4-4 4H9.5m16.556-6.963c0-2.216 1.783-4 4-4H38.5m4-4.111V9.61M26.056 35.537V38.5");
}
</style><path class="omh3qcn1y"/>`,
		"fallback": "arcticons:primer",
	});
}

export default Component;
