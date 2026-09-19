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
		"content": `<style>.o5q1y5b1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.408 19.204l9.383-4.947m-9.383 2.047l9.383-4.947m-9.383-.91L30.791 5.5m-11.927 9.173l14.472-7.63M24 22.752c21.665-12.188 11.544 25.245 0 19.05m0-19.05c-21.665-12.188-11.544 25.245 0 19.05");
}
</style><path class="o5q1y5b1o"/>`,
		"fallback": "arcticons:ringotan",
	});
}

export default Component;
