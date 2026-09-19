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

.joij3imdx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.806 19.77L11.5 36.5l16.59-8.154L36.5 11.5Zm0 .001l8.283 8.575");
}
</style><circle class="cpk0fnbgt"/><path class="joij3imdx"/>`,
		"fallback": "arcticons:kubenav",
	});
}

export default Component;
