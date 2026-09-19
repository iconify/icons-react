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
		"content": `<style>.asu30qbdw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.15 13.6v-2.28a2.93 2.93 0 0 1 2.93-2.92h5.85a2.92 2.92 0 0 1 2.92 2.92v2.28m-21.45 0H10v26H8.4a3.91 3.91 0 0 1-3.9-3.9V17.5a3.91 3.91 0 0 1 3.9-3.9m1.6 0h28v26H10Zm28 0h1.6a3.91 3.91 0 0 1 3.9 3.9v18.2a3.91 3.91 0 0 1-3.9 3.9H38z");
}
</style><path class="asu30qbdw"/>`,
		"fallback": "arcticons:packlist",
	});
}

export default Component;
