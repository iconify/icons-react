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
		"content": `<style>.ap3gi9bca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 28.875l-9.75 9.75l-9.75-9.75L24 9.375l19.5 19.5l-9.75 9.75z");
}
</style><path class="ap3gi9bca"/>`,
		"fallback": "arcticons:tonal",
	});
}

export default Component;
