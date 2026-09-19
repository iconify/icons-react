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
		"content": `<style>.uq0el665a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.5 29.5v-3.75c0-6.075-4.925-11-11-11s-11 4.925-11 11v7.5m22-7.5a8.5 8.5 0 0 1 17 0v7.5");
}
</style><path class="uq0el665a"/>`,
		"fallback": "arcticons:make-by-kbank",
	});
}

export default Component;
