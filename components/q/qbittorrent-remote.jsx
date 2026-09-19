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

.sed0fx_5o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.651 22.364a5.034 5.034 0 0 1 5.035-5.035h0a5.034 5.034 0 0 1 5.034 5.035v3.272a5.034 5.034 0 0 1-5.034 5.035h0a5.034 5.034 0 0 1-5.035-5.035m0 5.035V10.533m-5.302 15.103a5.034 5.034 0 0 1-5.035 5.035h0a5.034 5.034 0 0 1-5.034-5.035v-3.272a5.034 5.034 0 0 1 5.034-5.035h0a5.034 5.034 0 0 1 5.035 5.035m0-5.035v20.138");
}
</style><circle class="cpk0fnbgt"/><path class="sed0fx_5o"/>`,
		"fallback": "arcticons:qbittorrent-remote",
	});
}

export default Component;
