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
		"content": `<style>.zj2lu3mac {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.482 34.811l-1.357 2.04a1.323 1.323 0 0 1-2.26-.094l1.398 2.534a4 4 0 0 0 .929 1.133a3.974 3.974 0 0 0 5.864-.873l15.289-23.3a3.97 3.97 0 0 0-2.866-6.12L9.429 6.685a3.969 3.969 0 0 0-3.927 5.861l.119.215l25.578 2.959a2.205 2.205 0 0 1 1.589 3.401ZM5.621 12.761l13.244 23.996");
}
</style><path class="zj2lu3mac"/>`,
		"fallback": "arcticons:proton-vpn",
	});
}

export default Component;
