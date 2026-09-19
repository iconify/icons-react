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
		"content": `<style>.jp9ecpztv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 34.5v4c0 2.216 1.784 4 4 4h29c2.216 0 4-1.784 4-4v-21H21a3 3 0 0 0-3 3v.5a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3v.5a3 3 0 0 1-3 3H5.5v-21c0-2.216 1.784-4 4-4h29c2.216 0 4 1.784 4 4v4");
}
</style><path class="jp9ecpztv"/>`,
		"fallback": "arcticons:selcom-pesa",
	});
}

export default Component;
