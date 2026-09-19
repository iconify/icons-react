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
		"content": `<style>.zrz686s2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5 34.329V13.67h3.699c3.823 0 6.922 3.106 6.922 6.938s-3.099 6.938-6.922 6.938H5m27.379 6.783V13.67h3.698c3.824 0 6.923 3.106 6.923 6.938s-3.1 6.938-6.923 6.938H32.38m3.697.001l6.763 6.777M29.818 10.8l-6.602 26.4l-6.598-26.4");
}
</style><path class="zrz686s2y"/>`,
		"fallback": "arcticons:pvr",
	});
}

export default Component;
