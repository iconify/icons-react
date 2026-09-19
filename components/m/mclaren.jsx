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
		"content": `<style>.r50vthbgp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 24.817C37.16 7.22 62.037 9.58 25.155 34.6c2.963-3.163 5.443-7.633 2.611-10.778c-2.322-3.185-13.1-3.138-23.266.996z");
}
</style><path class="r50vthbgp"/>`,
		"fallback": "arcticons:mclaren",
	});
}

export default Component;
