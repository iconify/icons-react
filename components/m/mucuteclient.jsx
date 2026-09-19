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
		"content": `<style>.bf2bwe4tp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.749 44.714a21.5 21.5 0 0 1 .029-41.436M14.225 27.04L35.453 5.812m-17.868 30.03l24.083-24.083M23.666 41.923L45.189 20.4");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="bf2bwe4tp"/>`,
		"fallback": "arcticons:mucuteclient",
	});
}

export default Component;
