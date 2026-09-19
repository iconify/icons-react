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
		"content": `<style>.knw842h5k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.69 40.125v-21.5l18.62-10.75v10.75");
}

.r3hxiol4p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 45.5V24l18.62-10.75v21.5zL5.38 34.75v-21.5L24 2.5v10.75");
}
</style><path class="r3hxiol4p"/><path class="knw842h5k"/>`,
		"fallback": "arcticons:multi-app",
	});
}

export default Component;
