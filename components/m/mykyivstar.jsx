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
		"content": `<style>.v43cbcfhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m3.5 19.397l12.528 4.07M24 4.503v13.173m7.973 5.792l12.527-4.07M28.927 32.84l7.742 10.657M19.073 32.84l-7.742 10.657");
}
</style><path class="v43cbcfhv"/>`,
		"fallback": "arcticons:mykyivstar",
	});
}

export default Component;
