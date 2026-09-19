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
		"content": `<style>.v_htsv5cf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.5 8.409h5.495a1 1 0 0 1 1 1v29.273a1 1 0 0 1-1 1H6.5a2 2 0 0 1-2-2V10.408a2 2 0 0 1 2-2m12.636-.09h11.743c16.828.033 16.828 31.337 0 31.274H19.136a1 1 0 0 1-1-1V9.317a1 1 0 0 1 1-1");
}
</style><path class="v_htsv5cf"/>`,
		"fallback": "arcticons:pushbullet",
	});
}

export default Component;
