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

.dn3bi1bdq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.213 23.134L20.49 16.366a1 1 0 0 0-1.5.866v13.536a1 1 0 0 0 1.5.866l11.723-6.768a1 1 0 0 0 0-1.732");
}
</style><circle class="cpk0fnbgt"/><path class="dn3bi1bdq"/>`,
		"fallback": "arcticons:kpn-tv",
	});
}

export default Component;
