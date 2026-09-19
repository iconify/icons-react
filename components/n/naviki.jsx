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
		"content": `<style>.dw1no_bus {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.166 9.613C8.238 19.227 32.663 22.788 43.5 22.801");
}

.hnu2clbep {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 12.046c32.448 2.609 17.226 15.587 7.123 26.341");
}
</style><path class="hnu2clbep"/><path class="dw1no_bus"/>`,
		"fallback": "arcticons:naviki",
	});
}

export default Component;
