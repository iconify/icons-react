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
		"content": `<style>.q3swu_bnd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.733 11.05h34.534L6.733 36.827l34.534.123M24 5.5v37");
}
</style><path class="q3swu_bnd"/>`,
		"fallback": "arcticons:nighthawk",
	});
}

export default Component;
