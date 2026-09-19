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
		"content": `<style>.tdo_ojz8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.69 5.5v37m12.62-37v37M42.5 17.69h-37m37 12.62h-37");
}
</style><path class="tdo_ojz8r"/>`,
		"fallback": "arcticons:su",
	});
}

export default Component;
