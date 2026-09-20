import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pvcyis-lw {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 1a7 7 0 1 0 0 14a7 7 0 0 0 0-14M8.5 6.5A.5.5 0 0 1 9 7v6a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m3 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5");
}
</style><path class="pvcyis-lw"/>`,
		"fallback": "fluent:pause-circle-20-regular",
	});
}

export default Component;
