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
		"content": `<style>.rqda-89eq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 42.459V27.022M5.5 5.5L24 32.48L42.5 5.557V42.5");
}
</style><path class="rqda-89eq"/>`,
		"fallback": "arcticons:modo",
	});
}

export default Component;
