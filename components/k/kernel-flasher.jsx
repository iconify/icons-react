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
		"content": `<style>.d4vin6bad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.375 19.375h9.25v9.25h-9.25zm0-13.875v4.625m9.25-4.625v4.625M5.5 19.375h4.625M5.5 28.625h4.625m9.25 9.25V42.5m9.25-4.625V42.5m9.25-23.125H42.5m-4.625 9.25H42.5");
}

.payv7tprf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.125 10.125h27.75v27.75h-27.75z");
}
</style><path class="payv7tprf"/><path class="d4vin6bad"/>`,
		"fallback": "arcticons:kernel-flasher",
	});
}

export default Component;
