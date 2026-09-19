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
		"content": `<style>.ecdqj2-zr {
  d: path("M5.5 14.75a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0m18.5 0a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0");
}

.mbkdoabfx {
  d: path("M5.5 33.25a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0");
}

.ohyog-bhe {
  d: path("M24 33.25a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0");
}

.rh_q3bwrv {
  d: path("M5.5 14.75h27.75v18.5H5.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ecdqj2-zr"/><path class="ohyog-bhe"/><path class="rh_q3bwrv"/><path class="mbkdoabfx"/></g>`,
		"fallback": "arcticons:laser-puzzle",
	});
}

export default Component;
