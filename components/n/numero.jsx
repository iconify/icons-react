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
		"content": `<style>.mxlorvbgd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 8.48v20.694c0 5.714-4.141 10.346-9.25 10.346S24 34.889 24 29.173V18.827c0-5.715-4.141-10.348-9.25-10.348S5.5 13.112 5.5 18.826V39.52");
}
</style><path class="mxlorvbgd"/>`,
		"fallback": "arcticons:numero",
	});
}

export default Component;
