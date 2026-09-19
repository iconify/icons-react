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
		"content": `<style>.u6n_qbbyr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.975 11.975h24.05v24.05h-24.05z");
}

.vixf7ccbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h37v37h-37z");
}

.znq8keuip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.988 17.988h12.025v12.025H17.988zM24 5.5v12.488M42.5 24H30.013M5.5 24h12.488M24 42.5V30.013");
}
</style><path class="vixf7ccbc"/><path class="u6n_qbbyr"/><path class="znq8keuip"/>`,
		"fallback": "arcticons:mhle",
	});
}

export default Component;
