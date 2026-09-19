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
		"content": `<style>.iksaczz6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 17.953h8.012m-4.006 12.094V17.953m6.424 10.769c.742.965 1.672 1.325 2.966 1.325h1.79a3.017 3.017 0 0 0 3.018-3.017v-.013A3.017 3.017 0 0 0 24.687 24H22.71a3.02 3.02 0 0 1-3.02-3.02h0a3.027 3.027 0 0 1 3.027-3.027h1.78c1.294 0 2.224.36 2.966 1.325m3.264 9.444c.742.965 1.672 1.325 2.965 1.325h1.79A3.017 3.017 0 0 0 38.5 27.03v-.013A3.017 3.017 0 0 0 35.483 24h-1.975a3.02 3.02 0 0 1-3.02-3.02h0a3.027 3.027 0 0 1 3.026-3.027h1.781c1.294 0 2.224.36 2.965 1.325");
}

.yo43fuw7d {
  cx: 24px;
  cy: 23.069px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="iksaczz6a"/><circle class="yo43fuw7d"/>`,
		"fallback": "arcticons:ttslexx",
	});
}

export default Component;
