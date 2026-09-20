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
		"content": `<style>.gkz564b6i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.184 14.341a3.226 3.226 0 1 1-6.452 0a3.226 3.226 0 0 1 6.452 0m-2.232 17.157a3.226 3.226 0 1 1-6.452 0a3.226 3.226 0 0 1 6.452 0M43.5 38.077a3.226 3.226 0 1 1-6.452 0a3.226 3.226 0 1 1 6.452 0M41.378 9.923a3.226 3.226 0 1 1-6.452 0a3.226 3.226 0 1 1 6.452 0M13.1 13.82l21.876-3.562m3.167 2.89l1.847 21.75m-2.849 2.591l-26.32-5.164m-2.685-3.989l1.486-10.823");
}
</style><path class="gkz564b6i"/>`,
		"fallback": "arcticons:perspective",
	});
}

export default Component;
