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
		"content": `<style>.g2wj9jbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4");
}

.oi68ggbpe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.215 16.455v11.317c0 2.075-1.742 3.773-3.872 3.773s-3.873-1.698-3.873-3.773v-1.32m12.798 5.093v-15.09h3.485c3.679 0 6.777 3.018 6.777 6.602v1.886c0 3.584-3.098 6.602-6.777 6.602z");
}
</style><path class="g2wj9jbhp"/><path class="oi68ggbpe"/>`,
		"fallback": "arcticons:jd-sports",
	});
}

export default Component;
