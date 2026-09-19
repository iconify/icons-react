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
		"content": `<style>.uedvv2rji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.67 12.962c2.046-1.98 2.388-3.14 2.388-5.084S36.966 4.5 33.758 4.5S17.893 8.185 17.893 15.487s15.935 11.26 15.935 18.289s-9.419 9.724-14.81 9.724s-9.076-2.695-9.076-6.756s7.711-7.063 7.711-7.063");
}
</style><path class="uedvv2rji"/>`,
		"fallback": "arcticons:stride-health",
	});
}

export default Component;
