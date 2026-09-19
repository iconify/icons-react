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
		"content": `<style>.irz6ktbyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.75 24A9.25 9.25 0 1 1 24 14.75M33.25 24A9.25 9.25 0 1 1 24 33.25M33.25 24h-18.5M24 14.75v18.5");
}

.t234cpgpn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 14.75h9.25V5.5M42.5 33.25h-9.25v9.25");
}
</style><path class="irz6ktbyv"/><path class="t234cpgpn"/>`,
		"fallback": "arcticons:opensuse-tumbleweed",
	});
}

export default Component;
