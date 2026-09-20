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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x75x8380s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28 25.3a4 4 0 0 1-8 0v-2.6a4 4 0 0 1 8 0m0 6.6V18.7");
}
</style><circle class="cpk0fnbgt"/><path class="x75x8380s"/>`,
		"fallback": "arcticons:letter-lowercase-circle-a",
	});
}

export default Component;
