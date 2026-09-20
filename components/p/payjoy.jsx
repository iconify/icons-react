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
		"content": `<style>.ket8e4bex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 34c8.026-13.902 23.657-23.925 37-27.5c-13.326 7.694-24.392 16.626-35 35c35 0 35-6.545 35-35c-30.99 0-37 0-37 27.5");
}
</style><path class="ket8e4bex"/>`,
		"fallback": "arcticons:payjoy",
	});
}

export default Component;
