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
		"content": `<style>.nfbte06lp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.69 7.875v21.498l18.622 10.751V18.622z");
}

.s5nvho_hy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5L5.381 13.25v21.5L24 45.5l18.619-10.75v-21.5z");
}
</style><path class="s5nvho_hy"/><path class="nfbte06lp"/>`,
		"fallback": "arcticons:klover",
	});
}

export default Component;
