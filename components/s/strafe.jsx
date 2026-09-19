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
		"content": `<style>.s4663rbau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.308 32.808L3.5 24l8.808-8.808m20.5 20.5L24 44.5l-8.808-8.808m0-23.384L24 3.5l8.808 8.808m2.884 2.884L44.5 24l-8.808 8.808");
}
</style><path class="s4663rbau"/>`,
		"fallback": "arcticons:strafe",
	});
}

export default Component;
