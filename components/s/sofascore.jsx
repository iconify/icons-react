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
		"content": `<style>.h6wye8_9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.532 5.5h-37v18.347h9.047v-9.402h27.953zm-37 37h37V24.153h-9.047v9.402H5.532z");
}
</style><path class="h6wye8_9i"/>`,
		"fallback": "arcticons:sofascore",
	});
}

export default Component;
