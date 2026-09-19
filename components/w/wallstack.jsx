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
		"content": `<style>.hnelavlys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 18.032a1.2 1.2 0 0 1-.573.986l-3.13 1.963l-4.762 2.98l-9.207 5.782a1.55 1.55 0 0 1-1.655 0l-9.208-5.782l-4.762-2.98l-3.13-1.963a1.21 1.21 0 0 1 0-2.058L22.95 6.374a1.98 1.98 0 0 1 2.1 0l16.877 10.587c.392.244.583.657.573 1.07Z");
}

.vvghmgblu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 23.962v6.014a1.18 1.18 0 0 1-.573.987l-17.1 10.734a1.6 1.6 0 0 1-1.654 0l-17.1-10.735a1.18 1.18 0 0 1-.573-.986v-6.014c0 .392.191.795.573 1.028l3.13 1.963l13.97 8.762a1.55 1.55 0 0 0 1.654 0l13.97-8.762l3.13-1.963a1.2 1.2 0 0 0 .572-1.028Zm0-5.93v5.93m-37 0v-5.93");
}
</style><path class="hnelavlys"/><path class="vvghmgblu"/>`,
		"fallback": "arcticons:wallstack",
	});
}

export default Component;
