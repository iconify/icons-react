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

.sq0rgbboo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20 22.6a4 4 0 0 0 8 0V20a4 4 0 0 0-8 0m0-4v16");
}
</style><circle class="cpk0fnbgt"/><path class="sq0rgbboo"/>`,
		"fallback": "arcticons:letter-lowercase-circle-p",
	});
}

export default Component;
