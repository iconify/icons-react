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
		"content": `<style>.r_a32gbyd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 10.905h-6.522v21.668m0 0a4.522 4.522 0 1 1-9.043 0a4.522 4.522 0 0 1 9.043 0M27.33 10.905H5.5m21.83 8.616H5.5m13.248 8.616H5.5");
}
</style><path class="r_a32gbyd"/>`,
		"fallback": "arcticons:tageditor",
	});
}

export default Component;
