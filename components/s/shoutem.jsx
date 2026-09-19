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
		"content": `<style>.xvu5zw_vq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.849 6.13l18.026 18.453a2.092 2.092 0 0 1-.657 3.378L8.468 42.317a2.092 2.092 0 0 1-2.748-2.772l14.724-32.81a2.092 2.092 0 0 1 3.405-.605");
}
</style><path class="xvu5zw_vq"/>`,
		"fallback": "arcticons:shoutem",
	});
}

export default Component;
