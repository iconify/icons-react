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
		"content": `<style>.efatcfbvi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36.73 25.971l-.008.05c-.388 2.2-2.487 3.985-4.688 3.985h0c-2.201 0-3.671-1.785-3.283-3.986l.716-4.06c.388-2.202 2.487-3.986 4.688-3.986h0c2.201 0 3.67 1.784 3.283 3.986l-.009.049m-24.808-4.015L10.5 30.026m.739-4.191l7.842-7.8m-2.114 11.991l-3.893-6.016m8.087-.02h3.911m-4.971 6.016l2.121-12.032h6.016");
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
</style><path class="efatcfbvi"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:kfc-alt",
	});
}

export default Component;
