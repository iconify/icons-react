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
		"content": `<style>.fg0yr9bfh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.54 42.5v-37m21.793.07L7.257 23.05S23.453 46.315 41.46 41.772");
}
</style><path class="fg0yr9bfh"/>`,
		"fallback": "arcticons:kivra",
	});
}

export default Component;
