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
		"content": `<style>.fr6fnfb6i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m7.12 4.5l15.872 35.926M24 43.5l15.519-11.136L40.88 4.5L24 14.93L7.12 4.5l1.361 27.864z");
}

.yui2dwdmw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.889 24.795L24 43.5L8.111 23.596m18.483 16.83h-5.048M40.88 4.5L25.008 40.426M24 14.93L8.111 23.596m31.778 1.199L24 14.93");
}
</style><path class="fr6fnfb6i"/><path class="yui2dwdmw"/>`,
		"fallback": "arcticons:v-launcher",
	});
}

export default Component;
