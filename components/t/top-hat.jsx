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
		"content": `<style>.p1v74wbpd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.375 4.5h29.25v9.75H9.375zm9.75 29.25h9.75v9.75h-9.75z");
}

.stwv60w_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.875 4.5V24h-9.75v-9.75");
}
</style><path class="p1v74wbpd"/><path class="stwv60w_x"/>`,
		"fallback": "arcticons:top-hat",
	});
}

export default Component;
