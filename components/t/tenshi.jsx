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
		"content": `<style>.ihhsgsb1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 7.33h37M7.26 19.93h33.48M24 7.33c0 10.23.8 25.34-18.5 33.34");
}

.rmlps3biz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 39.93c-8.54-2.47-16.79-12.8-19.2-20");
}
</style><path class="ihhsgsb1n"/><path class="rmlps3biz"/>`,
		"fallback": "arcticons:tenshi",
	});
}

export default Component;
