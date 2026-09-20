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

.rlsr06bkd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.737 27.285a4 4 0 0 1-7.473-1.985v-2.6a4 4 0 0 1 4-4a4 4 0 0 1 3.469 2.008");
}
</style><circle class="cpk0fnbgt"/><path class="rlsr06bkd"/>`,
		"fallback": "arcticons:letter-lowercase-circle-c",
	});
}

export default Component;
