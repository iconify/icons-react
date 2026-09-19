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
		"content": `<style>.nte11tb2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 5.5v9.25m0 18.5v9.25h-37v-37h37");
}

.wqs6zb7fx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.25 32.75v-17.5h17.5v17.5");
}
</style><path class="nte11tb2t"/><path class="wqs6zb7fx"/>`,
		"fallback": "arcticons:surdo-help",
	});
}

export default Component;
