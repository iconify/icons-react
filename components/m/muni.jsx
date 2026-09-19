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
		"content": `<style>.j87swicgp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.125 24.375v9.75m26-16.25v9.75a6.5 6.5 0 1 1-13 0v-3.25a6.5 6.5 0 1 0-13 0a6.5 6.5 0 1 0-13 0v9.75");
}

.s9j0sdb8z {
  cx: 43.125px;
  cy: 14.625px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="j87swicgp"/><circle class="s9j0sdb8z"/>`,
		"fallback": "arcticons:muni",
	});
}

export default Component;
