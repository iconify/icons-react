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
		"content": `<style>.mymy8o8cm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.442 31.21v3.861l-8.44.03a11.1 11.1 0 1 1 8.44-3.892Z");
}

.naij3yvvb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.065 36.015l-.003 6.485h-14.06a18.5 18.5 0 1 1 14.75-29.665a18.5 18.5 0 0 1-.687 23.18");
}
</style><path class="naij3yvvb"/><path class="mymy8o8cm"/>`,
		"fallback": "arcticons:questionai",
	});
}

export default Component;
