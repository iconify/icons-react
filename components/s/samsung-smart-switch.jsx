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
		"content": `<style>.i_ccu1b6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.035 23.802c-4.443-.91-7.785-4.84-7.785-9.552c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v3m-7.785 6.948c4.443.91 7.785 4.84 7.785 9.552c0 5.385-4.365 9.75-9.75 9.75s-9.75-4.365-9.75-9.75v-3");
}

.mvqzor-wm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.078 33.578L14.25 30.75l-2.828 2.828m19.5-19.156l2.828 2.828l2.828-2.828");
}
</style><path class="i_ccu1b6x"/><path class="mvqzor-wm"/>`,
		"fallback": "arcticons:samsung-smart-switch",
	});
}

export default Component;
