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
		"content": `<style>.dgxeydb5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5a13.09 13.09 0 0 0-13.09 13.09c0 10.25 10 22.61 12.61 25.63a.8.8 0 0 0 1.21 0c2.55-3 12.36-15.38 12.36-25.63A13.09 13.09 0 0 0 24 4.5");
}

.ksyzu5xew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.52 11.65V19A4.48 4.48 0 0 0 24 23.52h0A4.48 4.48 0 0 0 28.48 19v-7.35m0 7.39v4.48m-8.96-4.48v10.22");
}
</style><path class="dgxeydb5e"/><path class="ksyzu5xew"/>`,
		"fallback": "arcticons:ulogger",
	});
}

export default Component;
