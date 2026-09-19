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
		"content": `<style>.cn5q2db1h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.036 35.23h14.103L25.386 6.3a1.602 1.602 0 0 0-2.772 0L5.86 35.23h11.06l7.27 7.27V24.34m-4.155-13.474h7.93");
}
</style><path class="cn5q2db1h"/>`,
		"fallback": "arcticons:penup",
	});
}

export default Component;
