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

.nq9ppfbul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.651 22.364a5.034 5.034 0 1 1 10.069 0v3.272a5.034 5.034 0 1 1-10.069 0m0 5.035V10.533m-5.302 15.103a5.034 5.034 0 1 1-10.069 0v-3.272a5.034 5.034 0 1 1 10.069 0m0-5.035v20.138");
}
</style><circle class="cpk0fnbgt"/><path class="nq9ppfbul"/>`,
		"fallback": "arcticons:qbittorrent-remote",
	});
}

export default Component;
