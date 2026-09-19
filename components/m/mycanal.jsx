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
		"content": `<style>.du9w75v9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 19H29V5.5H19V19H5.5v10H19v13.5h10V29h13.5z");
}
</style><path class="du9w75v9u"/>`,
		"fallback": "arcticons:mycanal",
	});
}

export default Component;
