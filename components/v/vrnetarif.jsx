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
		"content": `<style>.px391abcr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 45.5a8.74 8.74 0 0 1-8.4-8.74v-5.68a8.74 8.74 0 0 1 8.74-8.75h0a8.74 8.74 0 0 1 8.74 8.75v2.84H15.6");
}

.u-aul108h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 45.5A21.5 21.5 0 1 1 45.5 24A21.51 21.51 0 0 1 24 45.5");
}
</style><path class="px391abcr"/><path class="u-aul108h"/>`,
		"fallback": "arcticons:vrnetarif",
	});
}

export default Component;
