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
		"content": `<style>.gj3ikupix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.5 18A8.5 8.5 0 1 1 24 9.5");
}

.ot7s678kg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.454 27.547a13.5 13.5 0 1 1 9.545 3.953h-7c-.554 0-1 .446-1 1v2c0 .554.446 1 1 1h13c.554 0 1 .446 1 1v2c0 .554-.446 1-1 1h-11.5c-.554 0-1 .446-1 1v2c0 .554.446 1 1 1h11");
}
</style><path class="ot7s678kg"/><path class="gj3ikupix"/>`,
		"fallback": "arcticons:light-eq",
	});
}

export default Component;
