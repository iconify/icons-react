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

.p4i604bdx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11 29.25v-6.19a1.885 1.885 0 0 1 2.478-1.79l2.33.772a4.26 4.26 0 0 0 3.502-.374l4.49-2.645a1.658 1.658 0 0 1 2.5 1.428v1.299a1.574 1.574 0 0 0 2.304 1.394L37 18.75m-3.5 10.5v-8.5");
}
</style><circle class="cpk0fnbgt"/><path class="p4i604bdx"/>`,
		"fallback": "arcticons:meitu",
	});
}

export default Component;
