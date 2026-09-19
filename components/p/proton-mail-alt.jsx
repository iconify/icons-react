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
		"content": `<style>.l78bu324y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 27L22 35.38a4 4 0 0 0 4.26 0L39.5 27M24 10.74a9.43 9.43 0 0 1 9.43 9.43v1.73h0h-18.86h0v-1.73A9.43 9.43 0 0 1 24 10.74");
}

.m89kqfzei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5A15.5 15.5 0 0 1 39.5 20v21.5a2 2 0 0 1-2 2h-27a2 2 0 0 1-2-2V20A15.5 15.5 0 0 1 24 4.5");
}
</style><path class="m89kqfzei"/><path class="l78bu324y"/>`,
		"fallback": "arcticons:proton-mail-alt",
	});
}

export default Component;
