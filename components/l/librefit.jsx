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
		"content": `<style>.d8i3t0b_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.056 24.045h21.852m3.325-15.457v30.854M42.5 13.9v20.2M9.74 8.558v30.615M5.5 13.96v20.2");
}
</style><path class="d8i3t0b_z"/>`,
		"fallback": "arcticons:librefit",
	});
}

export default Component;
