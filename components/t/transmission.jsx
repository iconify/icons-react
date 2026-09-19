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
		"content": `<style>.gmc548-gc {
  cx: 24px;
  cy: 10.71px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.25px;
  ry: 6.21px;
}

.mmmppwbkp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.73 33.02h10.49V43.5H18.73zM24 33V16.92");
}
</style><ellipse class="gmc548-gc"/><path class="mmmppwbkp"/>`,
		"fallback": "arcticons:transmission",
	});
}

export default Component;
