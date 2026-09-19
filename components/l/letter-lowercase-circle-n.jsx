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

.e_v15z0dz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28 29.3v-6.6a4 4 0 0 0-4-4h0a4 4 0 0 0-4 4m0 6.6V18.7");
}
</style><circle class="cpk0fnbgt"/><path class="e_v15z0dz"/>`,
		"fallback": "arcticons:letter-lowercase-circle-n",
	});
}

export default Component;
