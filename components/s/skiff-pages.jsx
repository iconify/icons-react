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
		"content": `<style>.arogtpx7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 21v16.5c0 2.77-2.23 5-5 5h-27c-2.77 0-5-2.23-5-5v-27c0-2.77 2.23-5 5-5H27");
}

.b9m50vb_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27 5.5V19c0 1.1.9 2 2 2h13.5z");
}
</style><path class="arogtpx7h"/><path class="b9m50vb_s"/>`,
		"fallback": "arcticons:skiff-pages",
	});
}

export default Component;
