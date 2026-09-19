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
		"content": `<style>.h0smet13q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.525 10.3L6.356 31.378c-2.433 4.215.609 9.483 5.476 9.483h24.336c4.867 0 7.909-5.268 5.476-9.483L29.475 10.301c-2.433-4.215-8.517-4.215-10.95 0Z");
}
</style><path class="h0smet13q"/>`,
		"fallback": "arcticons:prisma",
	});
}

export default Component;
