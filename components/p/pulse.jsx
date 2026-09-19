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
		"content": `<style>.gxb44gqhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.606 17.174A21.516 21.516 0 1 1 2.5 24h12.66l5.077 11.355l7.025-23.103L31.01 24h5.944");
}

.neb6k8bfv {
  cx: 38.944px;
  cy: 24px;
  r: 1.991px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="gxb44gqhn"/><circle class="neb6k8bfv"/>`,
		"fallback": "arcticons:pulse",
	});
}

export default Component;
