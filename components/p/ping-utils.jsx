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
		"content": `<style>.btbl76b9o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.541 5.582h29.048a4.02 4.02 0 0 1 4.006 4.006v29.048a4.02 4.02 0 0 1-4.006 4.007H9.54a4.02 4.02 0 0 1-4.007-4.007V9.588A4.02 4.02 0 0 1 9.54 5.582");
}

.cm0_jkbks {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.829 26.801h9.202v9.202h-9.202zm0-14.804h9.202v9.202h-9.202zm14.389 4.601h9.954m-9.954 14.804h9.954");
}
</style><path class="cm0_jkbks"/><path class="btbl76b9o"/>`,
		"fallback": "arcticons:ping-utils",
	});
}

export default Component;
