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
		"content": `<style>.p01hmhb7g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5A21.5 21.5 0 1 0 45.5 24A21.51 21.51 0 0 0 24 2.5m0 7.44A14.06 14.06 0 1 0 38.06 24A14.07 14.07 0 0 0 24 9.94m0 7.44A6.62 6.62 0 1 0 30.62 24A6.63 6.63 0 0 0 24 17.38");
}
</style><path class="p01hmhb7g"/>`,
		"fallback": "arcticons:simpleflashlight",
	});
}

export default Component;
