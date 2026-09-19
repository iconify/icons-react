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
		"content": `<style>.lxgq4ibcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.23 39.849c4.55-9.286 9.01-19.2 20.269-25.72");
}

.uzx34tbji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.669 30.524h8.994m-8.994-16.978h8.994m-8.994 8.489h5.846m-5.846-8.489v16.978M5.5 30.518V13.554h5.68c3.278 0 5.9 2.544 5.9 5.725s-2.622 5.726-5.9 5.726H5.5M33.408 8.151c4.184 5.3 7.506 13.509 9.092 26.043");
}
</style><path class="uzx34tbji"/><path class="lxgq4ibcq"/>`,
		"fallback": "arcticons:poolexpert",
	});
}

export default Component;
