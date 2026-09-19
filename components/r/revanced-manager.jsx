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
		"content": `<style>.horwmmb2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m40.316 4.5l-16.376 39l-16.256-39");
}

.na9rivb1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.386 4.5h21.109L23.94 27.241Z");
}
</style><path class="na9rivb1k"/><path class="horwmmb2o"/>`,
		"fallback": "arcticons:revanced-manager",
	});
}

export default Component;
