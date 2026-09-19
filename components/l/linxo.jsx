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
		"content": `<style>.y0e3bdi2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 27.562l11.172-10.455l13.53 14.042L43.5 16.851");
}
</style><path class="y0e3bdi2b"/>`,
		"fallback": "arcticons:linxo",
	});
}

export default Component;
