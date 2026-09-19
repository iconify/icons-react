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
		"content": `<style>.cwx8apcnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.825 40.869c1.04-1.034 1.19-1.614.907-3.51c-.669-4.465-3.935-8.174-8.505-9.659c-1.796-.583-4.953-.58-6.847.006c-5.012 1.55-8.628 5.918-8.729 10.538c-.125 1.578.697 2.322 1.734 3.32c4.21 2.603 17.94 2.78 21.44-.695");
}

.py62t_ixd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.681 9.815V4.5m6.622 8.058L33.062 8.8m-1.016 10.38h5.315");
}

.upmka-bvk {
  cx: 22.681px;
  cy: 19.18px;
  r: 4.59px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="cwx8apcnp"/><circle class="upmka-bvk"/><path class="py62t_ixd"/>`,
		"fallback": "arcticons:mi-telcel",
	});
}

export default Component;
