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
		"content": `<style>.p9dwthr0u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5A21.5 21.5 0 1 0 45.5 24A21.51 21.51 0 0 0 24 2.5m0 9.77a11.73 11.73 0 0 0-11.45 9.29h5.59a6.35 6.35 0 1 1 0 4.88h-5.6A11.72 11.72 0 1 0 24 12.27");
}
</style><path class="p9dwthr0u"/>`,
		"fallback": "arcticons:license",
	});
}

export default Component;
