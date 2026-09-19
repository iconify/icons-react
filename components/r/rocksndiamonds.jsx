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
		"content": `<style>.mvt6n0bpo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.79 37.62l18.12 5.88l-13.28-15.64l20.59-8.34l-7.31 24L43.5 31.27l-8.28-11.75l6.12-6.46l-19.7-8.56l13.58 15");
}

.r-8tvuddu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.63 27.86l-4.84 9.76L4.5 20.27L21.64 4.5Zm0 0L4.5 20.27m39 11l-2.16-18.21");
}
</style><path class="mvt6n0bpo"/><path class="r-8tvuddu"/>`,
		"fallback": "arcticons:rocksndiamonds",
	});
}

export default Component;
