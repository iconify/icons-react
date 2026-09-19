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
		"content": `<style>.dws-4ubsa {
  d: path("m5.5 20.975l11.068.11m-5.326.392s1.966 15.276 11.294 15.782s13.402-12.301 13.402-12.301");
}

.emejqxv9s {
  cx: 39.06px;
  cy: 14.166px;
  r: 3.44px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="dws-4ubsa"/><circle class="emejqxv9s"/></g>`,
		"fallback": "arcticons:tourism-union-international",
	});
}

export default Component;
