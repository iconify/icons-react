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

.x5ba6nbdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20 22.7a4 4 0 0 1 8 0v2.6a4 4 0 0 1-8 0z");
}
</style><circle class="cpk0fnbgt"/><path class="x5ba6nbdl"/>`,
		"fallback": "arcticons:letter-lowercase-circle-o",
	});
}

export default Component;
