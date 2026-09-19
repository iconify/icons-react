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
		"content": `<style>.vexzbmiyx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.359 26.433v2.638a5.24 5.24 0 0 1-5.235 5.245h-.229a5.24 5.24 0 0 1-5.254-5.226v-2.657m0-4.651v-2.638a5.24 5.24 0 0 1 5.235-5.245h.229c2.91 0 5.254 2.34 5.254 5.245v2.638M24 19.103v9.872M8.146 11.763C7.68 24.281 6.674 36.923 24 43.5c17.327-6.576 16.32-19.219 15.854-31.736L24 4.5z");
}
</style><path class="vexzbmiyx"/>`,
		"fallback": "arcticons:untracker",
	});
}

export default Component;
