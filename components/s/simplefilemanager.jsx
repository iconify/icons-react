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
		"content": `<style>.lndot1bjt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.66 12.5v-2.21a1.93 1.93 0 0 1 1.94-1.94h8.85c2 0 5.56 3.69 7.32 3.78h15.1a1.63 1.63 0 0 1 1.63 1.63v19.79a1.94 1.94 0 0 1-2 1.94h-2.16V17.92a1.62 1.62 0 0 0-1.62-1.63H22.61c-1.75-.1-5.3-3.79-7.32-3.79H6.45a1.94 1.94 0 0 0-1.95 1.94v23.27a1.94 1.94 0 0 0 1.94 1.94h31a1.93 1.93 0 0 0 1.94-1.94V21");
}
</style><path class="lndot1bjt"/>`,
		"fallback": "arcticons:simplefilemanager",
	});
}

export default Component;
