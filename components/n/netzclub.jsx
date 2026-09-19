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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.xznbhpaid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.65 34.496H9.5v-9.88c1.973-1.45 5.044-2.055 7.15-2.055zm10.925 0h-7.15V20.384c1.973-1.898 5.044-2.052 7.15-2.052zm10.925 0h-7.15V15.999c1.974-2.384 5.044-2.495 7.15-2.495z");
}
</style><path class="i9clfwm2k"/><path class="xznbhpaid"/>`,
		"fallback": "arcticons:netzclub",
	});
}

export default Component;
