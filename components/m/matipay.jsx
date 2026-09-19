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
		"content": `<style>.s0nw53bsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.375 27.5l8 8l16-16");
}

.z1u8efb0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.125 30.75v6.75c0 3.324-2.676 6-6 6h-13.5c-3.324 0-6-2.676-6-6v-27c0-3.324 2.676-6 6-6h13.5c3.324 0 6 2.676 6 6v12.25");
}
</style><path class="z1u8efb0o"/><path class="s0nw53bsu"/>`,
		"fallback": "arcticons:matipay",
	});
}

export default Component;
