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
		"content": `<style>.vixf7ccbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h37v37h-37z");
}

.w5o1kwhjs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.667 11.667h24.667v24.667H11.667zm24.666 0l6.167 6.167m-6.167 18.5L42.5 42.5");
}
</style><path class="vixf7ccbc"/><path class="w5o1kwhjs"/>`,
		"fallback": "arcticons:mi-carpeta-ciudadana",
	});
}

export default Component;
