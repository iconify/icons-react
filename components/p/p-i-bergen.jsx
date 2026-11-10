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
		"content": `<style>.m6wzbwpcl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.234 42.5H38.5c2.216 0 4-1.784 4-4v-29c0-2.216-1.784-4-4-4h-29c-2.216 0-4 1.784-4 4v29c0 2.216 1.784 4 4 4h6.146V15.333h10.537s7.03.035 6.814 7.55c-.214 7.516-7.043 6.957-7.043 6.957");
}
</style><path class="m6wzbwpcl"/>`,
		"fallback": "arcticons:p-i-bergen",
	});
}

export default Component;
