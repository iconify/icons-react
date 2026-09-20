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
		"content": `<style>.a-z5fpb6s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.626 11.962l2.226 2.418l6.078-5.813m6.57 19.036a19.66 19.66 0 0 1-21.477.343a19.41 19.41 0 0 1-8.814-19.421m4.835 30.969A31 31 0 0 1 4.5 25.93");
}

.azhi__bko {
  cx: 32.5px;
  cy: 11.5px;
  r: 9.3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zzxsfac0i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.458 9.008A3.99 3.99 0 0 1 43.5 12.5v23c0 2.216-1.784 4-4 4h-31c-2.216 0-4-1.784-4-4v-23c0-2.216 1.784-4 4-4h15.219");
}
</style><path class="zzxsfac0i"/><circle class="azhi__bko"/><path class="a-z5fpb6s"/>`,
		"fallback": "arcticons:stuff",
	});
}

export default Component;
