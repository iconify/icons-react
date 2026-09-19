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
		"content": `<style>.aya90v7yi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.847 24.138h-.868a1.8 1.8 0 0 1-1.455-.74l-3.564-4.9c-.458-.601-1.263-1.393-1.263-2.566c0-1.107.899-2.07 2.15-2.07c1.219 0 2.082.963 2.082 2.07c0 1.173-.95 2.176-2.706 2.509c-1.957.371-3.18 1.445-3.18 3.216c0 1.431.902 2.48 2.706 2.48c2.371 0 3.767-2.248 5.828-5.012m.115-5.263H38.5m-3.404 10.276V13.862m-3.249 10.265h4.212m-4.367-10.265v.963m6.808-.963v.963m-28.037 9.302V13.862l5.138 10.276l5.138-10.26v10.26M9.5 24.127h1.927m8.349 0h1.927m-.964-10.265h.964m-12.203 0h.963m19.966 5.263h1.806");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.m9a3ctu9p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 32.5h37");
}
</style><path class="aya90v7yi"/><rect class="j3s9ivbxi"/><path class="m9a3ctu9p"/>`,
		"fallback": "arcticons:mt-bank",
	});
}

export default Component;
