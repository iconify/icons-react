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
		"content": `<style>.ain98ybuh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.16 33.34h1A7.81 7.81 0 0 0 24 25.6v-5.72a7.81 7.81 0 0 1 7.86-7.74h1");
}

.rds6imv3c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.15 18.47C38.7 5 39.15 5 27.73 4.55c-11-.45-13 2.17-15.07 11.66c-5.49 25.6-7.32 31.88 9.13 24.26c17.89-8.3 17.71-11.66 17.36-22");
}
</style><path class="rds6imv3c"/><path class="ain98ybuh"/>`,
		"fallback": "arcticons:surfshark",
	});
}

export default Component;
