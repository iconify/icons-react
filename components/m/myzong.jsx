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
		"content": `<style>.dpydgqdcs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.546 45.499a21.497 21.497 0 1 1 6.908.001");
}
</style><path class="dpydgqdcs"/>`,
		"fallback": "arcticons:myzong",
	});
}

export default Component;
