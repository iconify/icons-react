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
		"content": `<style>.hfp9c0b9z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 23.467c11.542 9.07 27.894 8.69 39-.91c-2.712 10.838-13.697 17.426-24.535 14.714A20.23 20.23 0 0 1 4.5 23.467");
}

.pe90bdpnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.528 11.02c11.548 8.989 27.825 8.612 38.945-.9c-2.75 10.823-13.752 17.368-24.576 14.619A20.22 20.22 0 0 1 4.529 11.02");
}
</style><path class="pe90bdpnp"/><path class="hfp9c0b9z"/>`,
		"fallback": "arcticons:malakoff-humanis",
	});
}

export default Component;
