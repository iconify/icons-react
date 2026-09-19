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
		"content": `<style>.a_uq5jbwx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.833 42.5v-37H42.5z");
}

.dz3zu-bor {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.833 30.167H5.5L42.5 5.5v24.667H26.056");
}
</style><path class="dz3zu-bor"/><path class="a_uq5jbwx"/>`,
		"fallback": "arcticons:labamu",
	});
}

export default Component;
