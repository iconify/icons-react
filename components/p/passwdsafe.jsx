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
		"content": `<style>.ohqzv-bfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.167 30.167H5.5L17.833 42.5H5.5v-37l12.333 12.333H5.5L30.167 42.5m0 0H42.5L30.167 30.167");
}
</style><path class="ohqzv-bfx"/>`,
		"fallback": "arcticons:passwdsafe",
	});
}

export default Component;
