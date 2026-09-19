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
		"content": `<style>.hagr3w4gv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 41.022L42.5 8.979h-37zm0-12.027L35.556 8.979");
}
</style><path class="hagr3w4gv"/>`,
		"fallback": "arcticons:vero",
	});
}

export default Component;
