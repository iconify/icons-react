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
		"content": `<style>.rk_8lkbiv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.85 3.41A21.49 21.49 0 0 1 8.05 38.5a21.5 21.5 0 1 0 21.8-35.09");
}
</style><path class="rk_8lkbiv"/>`,
		"fallback": "arcticons:skysafari",
	});
}

export default Component;
