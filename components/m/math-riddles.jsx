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

.g21yotbcb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 28.024v-8.057l4.033 8.066l4.033-8.054v8.054m8.11-8.066h5.344m-2.672 8.066v-8.066m4.808 0v8.066m5.344-8.066v8.066m-5.344-4.048H38.5m-14.073 1.35h-3.494m-.871 2.674l2.621-8.042l2.622 8.066");
}
</style><circle class="cpk0fnbgt"/><path class="g21yotbcb"/>`,
		"fallback": "arcticons:math-riddles",
	});
}

export default Component;
