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
		"content": `<style>.rbbxf8bvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.9 31.666l1.983 3.434A14.8 14.8 0 0 0 42.5 27.7V5.5h-7.4v22.2a7.4 7.4 0 0 1-13.809 3.7l-8.39-14.533L12.9 42.5H5.5V11.444a5.94 5.94 0 0 1 11.082-2.975L27.7 27.699V5.5h7.4");
}
</style><path class="rbbxf8bvo"/>`,
		"fallback": "arcticons:nj-transit",
	});
}

export default Component;
