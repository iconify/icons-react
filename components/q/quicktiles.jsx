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
		"content": `<style>.y7t12oqch {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7 7h17v17H7zm17 0h17v17H24zM7 24h17v17H7zm19.8 2.8h17v17h-17z");
}
</style><path class="y7t12oqch"/>`,
		"fallback": "arcticons:quicktiles",
	});
}

export default Component;
