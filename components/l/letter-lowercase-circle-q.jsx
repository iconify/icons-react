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

.l1zjvop8k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28 22.6a4 4 0 0 1-4 4h0a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4m0-4v16");
}
</style><circle class="cpk0fnbgt"/><path class="l1zjvop8k"/>`,
		"fallback": "arcticons:letter-lowercase-circle-q",
	});
}

export default Component;
