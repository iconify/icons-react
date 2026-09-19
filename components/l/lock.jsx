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
		"content": `<style>.k2z72txgn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.17 19.26h27.66a1.9 1.9 0 0 1 1.898 1.9V41.6a1.9 1.9 0 0 1-1.899 1.9H10.171a1.9 1.9 0 0 1-1.9-1.9V21.16a1.9 1.9 0 0 1 1.9-1.9m3.419 0V14.9a10.401 10.401 0 0 1 20.803 0v4.36");
}

.n4d05hk2o {
  cx: 23.991px;
  cy: 31.38px;
  r: 4.034px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="k2z72txgn"/><circle class="n4d05hk2o"/>`,
		"fallback": "arcticons:lock",
	});
}

export default Component;
